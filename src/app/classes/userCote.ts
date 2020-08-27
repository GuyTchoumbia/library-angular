import { Cote } from './cote';
import { User } from './user';

export class UserCote {
    id: number;
    user: User;
    cote: Cote;
    dateEmprunt: Date;
    dateReservation: Date;
    dateRetour: Date;
    prolongation: boolean;
}
