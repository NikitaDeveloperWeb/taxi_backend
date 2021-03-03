import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    firstname: string;
    lastname: string;
    date: string;
    car?: string;
    username: string;
    inn: string;
    passport: string;
    address: string;
    vo?: string;
    position: string;
    password: string;
    password2: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User>, import("mongoose").Model<Document<User>>, undefined>;
