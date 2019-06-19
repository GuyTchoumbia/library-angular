import { Document } from '../classes/document';

export const DOCUMENTS: Document[] = [
    {
        id: 1,
        type: {id: 1, libelle: 'book'},
        libelle: 'Les Trois Mousquetaires',
        auteurs: [
            {id: 1, libelle: 'Alexandre Dumas'}
        ],
        editeur: { id: 1, libelle: 'Folio'},
        date: new Date(2013, 5),
        bibliotheques: [
            { id: 1, libelle: '1er arrondissment'},
            { id: 3, libelle: '3eme arrondissment'},
        ],
        borrowed: true
    },
    {
        id: 2,
        type: {id: 1, libelle: 'book'},
        libelle: 'Le Comte de Montecristo',
        auteurs: [
            { id: 1, libelle: 'Alexandre Dumas'}
        ],
        editeur: {id: 2, libelle: 'Nathan'},
        date: new Date(1597, 1),
        bibliotheques: [
            { id: 2, libelle: '2eme arrondissment'},
            { id: 4, libelle: '4eme arrondissment'},
        ],
        borrowed: true
    },
    {
        id: 3,
        type: {id: 2, libelle: 'music'},
        libelle: 'GoldBerg Variations',
        auteurs: [
            { id: 2, libelle: 'J.S. Bach'}
        ],
        editeur: { id: 3, libelle: 'Sony'},
        date: new Date(1981, 2),
        bibliotheques: [
            { id: 3, libelle: '3eme arrondissment'},
            { id: 4, libelle: '4eme arrondissment'},
        ],
        borrowed: true
    },
    {
        id: 4,
        type: {id: 2, libelle: 'music'},
        libelle: 'Kind Of Blue',
        auteurs: [
            { id: 3, libelle: 'Miles Davis'}
        ],
        editeur: { id: 4, libelle: 'Columbia'},
        date: new Date(1981, 2),
        bibliotheques: [
            { id: 3, libelle: '3eme arrondissment'},
            { id: 4, libelle: '4eme arrondissment'},
        ],
        borrowed: false
    },
    {
        id: 5,
        type: {id: 3, libelle: 'paper'},
        libelle: 'National Geographic',
        auteurs: [
            { id: 5, libelle: 'Various'}
        ],
        editeur: { id: 5, libelle: 'N/A' },
        date: new Date(1981, 2),
        bibliotheques: [
            { id: 1, libelle: '1er arrondissment'},
            { id: 5, libelle: '5eme arrondissment'},
        ],
        borrowed: true
    },
    {
        id: 6,
        type: {id: 4, libelle: 'movie'},
        libelle: 'Singing In The Rain',
        auteurs: [
            { id: 5, libelle: 'Various'}
        ],
        editeur: { id: 5, libelle: 'N/A' },
        date: new Date(1951, 4),
        bibliotheques: [
            { id: 1, libelle: '1er arrondissment'},
            { id: 5, libelle: '5eme arrondissment'},
        ],
        borrowed: false
    },
];

