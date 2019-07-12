import { Authority } from './authority';

export class Credentials {
    username: string;
    password: string;
    authority: Authority;

    constructor(username: string, password: string, authority: Authority) {
        this.username = username;
        this.password = password;
        this.authority = authority;
    }
}