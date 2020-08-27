import { Library } from './library';
import { UserCote } from './userCote';
import { Document } from './document';

export class Cote {
    id: number;
    libelle: string;
    library: Library;
    userCotes: UserCote[];
    document: Document;
}
