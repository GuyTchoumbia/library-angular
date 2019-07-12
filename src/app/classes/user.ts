import { UserCote } from './userCote';
import { Civil } from './civil';
import { Contact } from './contact';
import { Credentials } from './credentials';

export class User {
   id: string;
   civil: Civil;
   contact: Contact;
   credentials: Credentials;
   userCotes: UserCote[];
}
