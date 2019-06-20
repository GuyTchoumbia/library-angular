import { Auteur } from './auteur';
import { Editeur } from './editeur';
import { Bibliotheque } from './bibliotheque';
import { Support } from './support';

export class Document {
    id: number;
    support: Support;
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
