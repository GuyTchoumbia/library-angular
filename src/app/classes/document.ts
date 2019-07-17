import { Auteur } from './auteur';
import { Editeur } from './editeur';
import { Support } from './support';
import { Cote } from './cote';
import { Tag } from './tag';

export class Document {
    id: number;
    libelle: string;
    isbn: string;
    support: Support;
    auteurs: Auteur[];
    editeur: Editeur;
    tags: Tag[];
    date: number;
    cotes: Cote[];

    toString(): string {
        return this.libelle;
    }
}
