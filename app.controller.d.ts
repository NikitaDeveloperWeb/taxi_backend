import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    private user;
    login(req: any): Promise<{
        access_token: string;
        data: {
            username: any;
            _id: any;
            firstname: any;
            lastname: any;
            inn: any;
            date: any;
            passport: any;
            position: any;
            address: any;
        };
    }>;
    getProfile(req: any): any;
}
