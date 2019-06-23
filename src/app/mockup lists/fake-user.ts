import { User } from '../classes/user';

export const USER: User = {
    id: '24544536453',
    name:'name',
    surname: 'surname',
    address: {
        numero: '5',
        rue: 'rue de la paix',
        codePostal: 69005,
        ville: 'Lyon'
    },
    phone: '1534534345',
    email: 'x@y.z',
    birthdate: new Date(1956, 10, 2),
    documents: [
        {
            id: 1,
            support: {id: 1, libelle: 'book'},
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
            support: {id: 1, libelle: 'book'},
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
        }
    ],
    reservations: [
        {
            id: 6,
            support: {id: 4, libelle: 'movie'},
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
        }
    ]

}