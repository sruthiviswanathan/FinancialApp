export class User {
    userName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;

    constructor() {}

    setUserValues(user: User) {
        this.userName = user.userName;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
        this.password = user.password;
        this.confirmPassword = user.confirmPassword;
    }
}