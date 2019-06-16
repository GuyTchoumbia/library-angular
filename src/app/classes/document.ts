import { Auteur } from './auteur';
import { Editeur } from './editeur';

export class Document {
    id: number;
    type: number;
    libelle: string;
    auteur: string;
    editeur: string;
    date: Date;
    bibliotheque: string;
}
