import { Library } from './library';
import { UserCote } from './userCote';

export class Cote {
    id: number;
    libelle: string;
    library: Library;
    userCote: UserCote;
}
