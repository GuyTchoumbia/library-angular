import { Document } from './document';

export interface User {
   username: string;
   id: string;
   address: string;
   phone: string;
   birthday: Date;
   documents: Document[];
   reservations: Document[];
}
