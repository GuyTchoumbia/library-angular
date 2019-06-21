import { Document } from './document';
import { Address } from './address';

export interface User {   
   id: string;
   name: string;
   surname: string;
   address: Address;
   phone: string;
   birthdate: Date;
   documents: Document[];
   reservations: Document[];
}
