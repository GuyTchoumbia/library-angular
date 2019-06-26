import { User } from '../classes/user';
import { Cote } from '../classes/cote';

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
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },  
                coteUser: []              
            },
            dateEmprunt: null,
            isReserved: true       
        },
        {
            cote : { 
                libelle: 'JADAKI' ,
                bibliotheque: { id: 1, libelle: '1er Arrondissement' },  
                coteUser: []              
            },
            dateEmprunt: new Date(2019, 6, 2),
            isReserved: false    
        }   
    ]
}