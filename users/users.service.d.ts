import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { User, UserDocument } from './schemas/users.shema';
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    private readonly users;
    getById(id: string): Promise<User>;
    getAll(): Promise<User[]>;
    create(userDto: CreateUsersDto): Promise<User>;
    remove(id: string): Promise<User>;
    update(id: string, UserDto: UpdateUsersDto): Promise<User>;
    findOne(username: string): Promise<User | undefined>;
}
