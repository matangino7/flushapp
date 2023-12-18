export class User {
    username!: string;
    email!: string;
    first_name!: string;
    last_name!: string;
    password!: string;
    groups: string = "";
    user_permissions: string = "";
}