import { UserCote } from './userCote';
import { Civil } from './civil';
import { Contact } from './contact';
import { Authority } from './authority';

export class User {
   id: number;
   civil: Civil;
   contact: Contact;
   password: string;
   authority: Authority;
   userCotes: UserCote[];
}
