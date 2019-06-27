import { Bibliotheque } from "./bibliotheque";
import { CoteUser } from "./coteUser";
import { Document } from './document';

export class Cote {
    libelle: string; 
    document: Document;
    bibliotheque: Bibliotheque; 
    coteUser: CoteUser[];
}