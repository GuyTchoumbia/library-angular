import { Document } from '../classes/document';

export const DOCUMENTS: Document[] = [
    { id: 1, type: 1, libelle: 'Les Trois Mousquetaires', auteur: 'Alexandre Dumas',
        editeur: 'Folio', date: new Date(2013, 5), bibliotheque: '1er arrondissment' },
    { id: 2, type: 1, libelle: 'Le Comte de Montecristo', auteur: 'Alexandre Dumas',
        editeur: 'Nathan', date: new Date(1597, 1), bibliotheque: '1er arrondissment' },
    { id: 3, type: 2, libelle: 'GoldBerg Variations', auteur: 'J.S. Bach',
        editeur: 'Sony', date: new Date(1981, 2), bibliotheque: '2eme arrondissment'},
    { id: 4, type: 2, libelle: 'Kind Of Blue', auteur: 'Miles Davis',
        editeur: 'Columbia', date: new Date(1959, 8), bibliotheque: '2eme arrondissment'},
    { id: 5, type: 3, libelle: 'National Geographic', auteur: 'Various',
        editeur: 'N/A', date: new Date(2019, 6), bibliotheque: '3eme arrondissment'},
    { id: 6, type: 4, libelle: 'Singing in the rain', auteur: 'Various',
        editeur: 'N/A', date: new Date(2019, 6), bibliotheque: '3eme arrondissment'}
];

