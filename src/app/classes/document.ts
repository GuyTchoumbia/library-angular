import { Auteur } from './auteur';
import { Editeur } from './editeur';
import { Support } from './support';
import { Cote } from './cote';
import { Theme } from './theme';

export class Document {
    id: number;
    support: Support;
    libelle: string;
    auteurs: Auteur[];
    editeur: Editeur;
    themes: Theme[];
    date: Date;
    cotes: Cote[];

    toString(): string {
        return this.libelle;
    }
}
