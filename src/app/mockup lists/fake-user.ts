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
    userCotes: [
        {
            cote : { 
                libelle: 'RODUTR' ,
                document: 
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
                    },
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },  
                coteUser: []              
            },
            dateEmprunt: null,
            dateReservation: new Date(2019, 6, 5)       
        },
        {
            cote : { 
                libelle: 'JADAKI' ,
                document:
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
                    },
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },  
                coteUser: []              
            },
            dateEmprunt: new Date(2019, 6, 2),
            dateReservation: null 
        }   
    ]
}