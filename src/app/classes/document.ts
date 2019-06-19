import { Auteur } from './auteur';
import { Editeur } from './editeur';
import { Bibliotheque } from './bibliotheque';
import { Type } from './type';

export class Document {
    id: number;
    type: Type;
    libelle: string;
    auteurs: Auteur[];
    editeur: Editeur;
    date: Date;
    bibliotheques: Bibliotheque[];
    borrowed: boolean;

    toString(): string {
        return this.libelle;
    }
}
