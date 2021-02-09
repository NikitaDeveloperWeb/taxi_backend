import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { generateMD5 } from 'src/utils/generateHash';
import { jwtConstants } from './constants';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const hashPass = generateMD5(pass + jwtConstants.secret);
      if (user.password === hashPass) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
      }
    } else {
      throw new Error('User is not defined');
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      firstname: user.firstname,
      lastname: user.lastname,
      inn: user.inn,
      date: user.date,
      passport: user.passport,
      position: user.position,
      address: user.address,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
