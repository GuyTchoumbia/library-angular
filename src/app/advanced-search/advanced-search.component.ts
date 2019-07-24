import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Library } from '../classes/library';
import { Support } from '../classes/support';
import { SearchService } from '../document/search.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  // will contain the list of libraries and supports taken from the API
  libraries: Library[];
  supports: Support[];

  searchParams = this.formBuilder.group({
    libelle: [''],
    auteur: [''],
    editeur: [''],
    isbn: [''],
    cote: [''],
    tag: [''],
    libraries: new FormArray([]),
    supports: new FormArray([])
  });

  constructor(private router: Router,
              private searchService: SearchService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchService.getAllLibraries().subscribe((libraries: Library[]) => {
      this.libraries = libraries;
      this.libraries.map(library => {
        const control = new FormControl(library.id);
        (this.searchParams.controls.libraries as FormArray).push(control);
      });
    });
    this.searchService.getAllSupports().subscribe((supports: Support[]) => {
      this.supports = supports;
      this.supports.map(support => {
        const control = new FormControl(support.id);
        (this.searchParams.controls.supports as FormArray).push(control);
      });
    });
  }

  search(): void {
    // filter out empty fields (either undefined for inputs or false for checkboxes)
    const formValues = {...this.searchParams.value};
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        if (!formValues[key]) {
          delete formValues[key];
        }
        if (Array.isArray(formValues[key])) {
          const resultArray = formValues[key].filter(item => item);
          if (resultArray.length > 0) {
            formValues[key] = resultArray;
          } else {
            delete formValues[key];
          }
        }
      }
    }
    console.log(formValues);
    this.router.navigate(['results', 'advancedSearch', formValues]);
  }

  reset() {
    // at worst
    // window.location.reload();

    // but this is enough
    this.searchParams.reset();
  }

}
