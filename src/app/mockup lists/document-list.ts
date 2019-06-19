import { Document } from '../classes/document';

export const DOCUMENTS: Document[] = [
    { id: 1, type: "book", libelle: 'Les Trois Mousquetaires', auteur: 'Alexandre Dumas',
        editeur: 'Folio', date: new Date(2013, 5), bibliotheque: '1er arrondissment', borrowed: true },
    { id: 2, type: "book", libelle: 'Le Comte de Montecristo', auteur: 'Alexandre Dumas',
        editeur: 'Nathan', date: new Date(1597, 1), bibliotheque: '1er arrondissment', borrowed: true },
    { id: 3, type: "music", libelle: 'GoldBerg Variations', auteur: 'J.S. Bach',
        editeur: 'Sony', date: new Date(1981, 2), bibliotheque: '2eme arrondissment', borrowed: true },
    { id: 4, type: "music", libelle: 'Kind Of Blue', auteur: 'Miles Davis',
        editeur: 'Columbia', date: new Date(1959, 8), bibliotheque: '2eme arrondissment', borrowed: false },
    { id: 5, type: "paper", libelle: 'National Geographic', auteur: 'Various',
        editeur: 'N/A', date: new Date(2019, 6), bibliotheque: '3eme arrondissment', borrowed: true },
    { id: 6, type: "movie", libelle: 'Singing in the rain', auteur: 'Various',
        editeur: 'N/A', date: new Date(2019, 6), bibliotheque: '3eme arrondissment', borrowed: false }
];

