import { Document } from './document';
import { Address } from './address';
import { UserCote } from './userCote';
import { Cote } from './cote';

export interface User {
   id: string;
   name: string;
   surname: string;
   address: Address;
   phone: string;
   email: string;
   birthdate: Date;
   userCotes: UserCote[];   
}
