import { User } from '../classes/user';
import { Library } from '../classes/library';
import { UserCote } from '../classes/userCote';
import { Document } from '../classes/document';

// filled data objects for testing

export const testUser: User = {
  id: 1,
  civil: {
    prenom: 'test prenom',
    nom: 'test nom',
    dateNaissance: new Date(0)
  },
  contact: {
      adress: {
          numero: 'test numero',
          rue: 'test street',
          codePostal: 4345,
          ville: 'test city'
      },
      phone: 'test phone',
      email: 'test email'
  },
  password: 'test password',
  authority: null,
  userCotes: null
}

export const testLibrary: Library = {
  id: 5,
  libelle: 'test library libelle',
  horaires: {
    lundi: 'lundi',
    mardi: 'mardi',
    mercredi: 'mercredi',
    jeudi: 'jeudi',
    vendredi: 'vendredi',
    samedi: 'samedi',
    dimanche: 'dimanche'
    },
  adress: {
    numero: 'test number',
    rue: 'test street',
    ville: 'test city',
    codePostal: 11111
  }
};

export const testUserCote: UserCote = {
  id: 1,
  user: null,
  dateEmprunt: new Date(0),
  dateReservation: new Date(0),
  dateRetour: new Date(0),
  prolongation: true,
  cote: {
    id: 1,
    libelle: 'test cote libelle',
    library: {
      id: 1,
      libelle: 'test library libelle',
      horaires: null,
      adress: null
    },
    reserved: true,
    document: {
      id: 1,
      libelle: 'test document libelle',
      isbn: 'test isbn',
      support: {
        id: 1,
        libelle: 'test support libelle'
      },
      auteurs: [ {id: 1, libelle: 'test auteur libelle'} ],
      editeur: null,
      tags: null,
      date:null,
      cotes: null
    },
    userCotes: null
  }
}


export const testDocument: Document = {
  id: 1,
  libelle: 'test libelle',
  isbn: 'test isbn',
  support: {
    id: 1,
    libelle: 'test support libelle'
  },
  auteurs: [],
  editeur: {
    id: 1,
    libelle: 'test editeur libelle'
  },
  date: 0,
  cotes: [],
  tags: []
};

export const testUserCotes: UserCote[] = [
  {
    id: 1,
    user: null,
    dateEmprunt: new Date(0),
    dateReservation: null,
    dateRetour: null,
    prolongation: true,
    cote: null
  },
  {
    id: 2,
    user: null,
    dateEmprunt: new Date(0),
    dateReservation: null,
    dateRetour: null,
    prolongation: true,
    cote: null
  },
  {
    id: 3,
    user: null,
    dateEmprunt: null,
    dateReservation: new Date(0),
    dateRetour: null,
    prolongation: true,
    cote: null
  }
];