import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilComponent } from './acceuil.component';
import { Library } from '../classes/library';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AcceuilComponent', () => {
  let component: AcceuilComponent;
  let fixture: ComponentFixture<AcceuilComponent>;
  let dom: HTMLElement;

  const testLibraries: Library[] = [
    { id: 1, libelle: 'test library 1', horaires: null, adress: null},
    { id: 2, libelle: 'test library 2', horaires: null, adress: null},
  ]
  const stubActivatedRoute = {
    data: jasmine.createSpyObj('data', ['subscribe'])
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ AcceuilComponent ],
      providers: [ { provide: ActivatedRoute, useValue: stubActivatedRoute }]
    })
    fixture = TestBed.createComponent(AcceuilComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
     // initialise stub
    stubActivatedRoute.data.subscribe.and.callFake(() => component.libraries = testLibraries);

    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('should display menus properly', () => {
    const libelles = dom.querySelectorAll('#libelle');
    expect(libelles[0].textContent).toEqual('test library 1');
    expect(libelles[1].textContent).toEqual('test library 2');
  });
});
