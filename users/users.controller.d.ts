import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { User } from './schemas/users.shema';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    getAll(): Promise<User[]>;
    getOne(id: string): Promise<User>;
    create(createUserDto: CreateUsersDto): Promise<User>;
    update(updateUserDto: UpdateUsersDto, id: string): Promise<User>;
    remove(id: string): Promise<User>;
    find(phone: string): Promise<User>;
}
