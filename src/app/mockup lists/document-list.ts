import { Document } from '../classes/document';

export const DOCUMENTS: Document[] = [
    {
        id: 1,
        support: {id: 1, libelle: 'book'},
        libelle: 'Les Trois Mousquetaires',
        auteurs: [
            {id: 1, libelle: 'Alexandre Dumas'}
        ],
        editeur: { id: 1, libelle: 'Folio'},
        date: new Date(2013, 5),
        themes: [
            { id: 1, libelle: 'Roman'}
        ],
        cotes: [
            { 
                libelle: 'RODUTR',
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },
                coteUser: []                                
            }
        ]
    },
    {
        id: 2,
        support: {id: 1, libelle: 'book'},
        libelle: 'Le Comte de Montecristo',
        auteurs: [
            { id: 1, libelle: 'Alexandre Dumas'}
        ],
        editeur: {id: 2, libelle: 'Nathan'},
        date: new Date(1597, 1),
        themes: [
            { id: 1, libelle: 'Roman'}
        ],
        cotes: [
            { 
                libelle: 'RODUCO',
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },
                coteUser: []                        
            }
        ]
    },
    {
        id: 3,
        support: {id: 2, libelle: 'music'},
        libelle: 'GoldBerg Variations',
        auteurs: [
            { id: 2, libelle: 'J.S. Bach'}
        ],
        editeur: { id: 3, libelle: 'Sony'},
        date: new Date(1981, 2),
        themes: [
            { id: 1, libelle: 'Classique'}
        ],
        cotes: [
            { 
                libelle: 'CLABAGO',
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },
                coteUser: []               
            }
        ]
    },
    {
        id: 4,
        support: {id: 2, libelle: 'music'},
        libelle: 'Kind Of Blue',
        auteurs: [
            { id: 3, libelle: 'Miles Davis'}
        ],
        editeur: { id: 4, libelle: 'Columbia'},
        date: new Date(1981, 2),
        themes: [
            { id: 1, libelle: 'Jazz'}
        ],
        cotes: [
            { 
                libelle: 'JADAKI',
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },
                coteUser: []                
            }
        ]
    },
    {
        id: 5,
        support: {id: 3, libelle: 'paper'},
        libelle: 'National Geographic',
        auteurs: [
            { id: 5, libelle: 'Various'}
        ],
        editeur: { id: 5, libelle: 'N/A' },
        date: new Date(1981, 2),
        themes: [
            { id: 1, libelle: 'Geographie'}
        ],
        cotes: [
            { 
                libelle: 'GENAVA',
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },
                coteUser: []                
            }
        ]
    },
    {
        id: 6,
        support: {id: 4, libelle: 'movie'},
        libelle: 'Singing In The Rain',
        auteurs: [
            { id: 5, libelle: 'Various'}
        ],
        editeur: { id: 5, libelle: 'N/A' },
        date: new Date(1951, 4),
        themes: [
            { id: 1, libelle: 'Comédie Musicale'}
        ],
        cotes: [
            { 
                libelle: 'CMVASI',
                bibliotheque: { id: 1, libelle: '1er Arrondissement'  },
                coteUser: []        
            }
        ]
    },
];

