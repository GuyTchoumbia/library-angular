import { Horaires } from './horaires';
import { Adress } from './adress';


export class Library {
    id: number;
    libelle: string;
    horaires: Horaires;
    adress: Adress;

    toString(): string {
        return this.libelle;
    }
}
