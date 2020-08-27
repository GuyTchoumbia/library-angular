import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Library } from '../classes/library';
import { Support } from '../classes/support';
import { SearchService } from '../document/search.service';
import { isNullOrUndefined } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  // will contain the list of libraries and supports taken from the API
  libraries: Library[];
  supports: Support[];
  model = false;

  searchParams = this.formBuilder.group({
    textinputs: this.formBuilder.group({
      libelle: [''],
      auteur: [''],
      editeur: [''],
      isbn: [''],
      cote: [''],
      tag: ['']
    }),
    checkboxes: this.formBuilder.group({
      libraries: new FormArray([]),
      supports: new FormArray([])
    })
  });

  constructor(private router: Router,
              private searchService: SearchService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.searchService.getAllLibraries().subscribe((libraries: Library[]) => {
      this.libraries = libraries;
      this.libraries.map(library => {
        const control = new FormControl(library.id);
        (this.searchParams.controls.checkboxes.get('libraries') as FormArray).push(control);
      });
    });
    this.searchService.getAllSupports().subscribe((supports: Support[]) => {
      this.supports = supports;
      this.supports.map(support => {
        const control = new FormControl(support.id);
        (this.searchParams.controls.checkboxes.get('supports') as FormArray).push(control);
      });
    });
  }

  search(): void {
    // validation: at least one text input must be filled
    const allEmptyFields: boolean = Object.values(this.searchParams.controls.textinputs.value).every(element => element === '');
    if (allEmptyFields) {
      const snackBarRef = this.snackBar.open('Au moins un champ doit être renseigné', 'Warning', { duration: 3000 });
    }
    else {
      // const formValues = {...this.searchParams.controls.textinputs};
      // console.log(formValues);
      // for (const key in formValues) {
      //   if (formValues.hasOwnProperty(key)) {
      //     if (!formValues[key]) {
      //       delete formValues[key];
      //     }
      //     if (Array.isArray(formValues[key])) {
      //       const resultArray = formValues[key].filter(item => item);
      //       if (resultArray.length > 0) {
      //         formValues[key] = resultArray;
      //       } else {
      //         delete formValues[key];
      //       }
      //     }
      //   }
      // }
      // this.router.navigate(['results', 'advancedSearch', formValues]);
      //   }
      // })
      const textInputValues = this.searchParams.controls.textinputs.value;
      const checkboxValues = this.searchParams.controls.checkboxes.value;
      Object.keys(textInputValues).forEach(key => {
        if (textInputValues[key] === '') {
          delete textInputValues[key];
      }
      });
      Object.keys(checkboxValues).forEach(key => {
        if (Array.isArray(checkboxValues[key])) {
          const resultArray = checkboxValues[key].filter(item => item);
          if (resultArray.length > 0) {
            checkboxValues[key] = resultArray;
          }
          else {
            delete checkboxValues[key];
          }
        }
      });
      const result = Object.assign(textInputValues, checkboxValues);
      this.router.navigate(['results', 'advancedSearch', result]);
    }
  }

  reset() {
    // at worst
    // window.location.reload();

    // but this is enough
    this.searchParams.reset();
  }

}
