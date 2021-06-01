import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Library } from 'src/app/classes/library';
import { Adress } from 'src/app/classes/adress';

export interface Horaire {
  jour: string;
  horaire: string;
}

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  columnsToDisplay: string[] = ['jour', 'horaire'];
  library: Library;
  dataSource: Horaire[];
  adressAsString: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  // displays information of chosen library, by parsing from the library objet properties, and passing them to a mat-table.

  ngOnInit() {
    this.route.data.subscribe((data: { library: Library }) => {
      this.library = data.library;
      this.dataSource = this.mapHoraires(this.library);
      this.adressAsString = this.flatAdressString(this.library);
    });

  }

  // "maps" the library data into a table acceptable for mat-table.
  mapHoraires(library: Library): Horaire[] {
    const dataSource = [
      {jour: 'Lundi', horaire: this.library.horaires.lundi},
      {jour: 'Mardi', horaire: this.library.horaires.mardi},
      {jour: 'Mercredi', horaire: this.library.horaires.mercredi},
      {jour: 'Jeudi', horaire: this.library.horaires.jeudi},
      {jour: 'Vendredi', horaire: this.library.horaires.vendredi},
      {jour: 'Samedi', horaire: this.library.horaires.samedi},
      {jour: 'Dimanche', horaire: this.library.horaires.dimanche},
    ];
    return dataSource;
  }

  // flattens the adress object as a String, simply.
  flatAdressString(library: Library): string {
    const adressAsString = this.library.adress.numero
                          + ' rue ' + this.library.adress.rue
                          + ', ' + this.library.adress.codePostal
                          + ' ' + this.library.adress.ville;
    return adressAsString;
  }

}
