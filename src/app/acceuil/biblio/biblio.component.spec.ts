import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Library } from 'src/app/classes/library';
import { BiblioComponent } from './biblio.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { testLibrary } from 'src/app/test/testData';

describe('BiblioComponent', () => {
  let component: BiblioComponent;
  let fixture: ComponentFixture<BiblioComponent>;
  const testData = {
    library: testLibrary
  }
  const stubRoute = {
    data: {
      subscribe: jasmine.createSpy()
    }
  }

  // let's give the route data a fake library object and check if the table fills in correctly.

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblioComponent ],
      providers: [{provide: ActivatedRoute, useValue: stubRoute}]
    });
    fixture = TestBed.createComponent(BiblioComponent);
    component = fixture.componentInstance;
    component.library = testLibrary;

    // initialise spies and stubs
    stubRoute.data.subscribe.and.callFake(() => component.library = testLibrary);
    spyOn(component, 'mapHoraires').and.callThrough();
    spyOn(component, 'flatAdressString').and.callThrough();

    fixture.detectChanges();
  }));

  it('should create and call all the methods', () => {
    expect(component).toBeDefined();
    expect(component.mapHoraires).toHaveBeenCalled();
    expect(component.flatAdressString).toHaveBeenCalled();
    expect(stubRoute.data.subscribe).toHaveBeenCalled();
  });

  // test flatAdressString()
  it('should flatten the adress properly', () => {
    const expectedAddress = 'test number rue test street, 11111 test city';
    const flatAdress = component.flatAdressString(component.library);
    expect(flatAdress).toBe(expectedAddress);
  });

  // test mapHoraires()
  it('should map horaires properly', () => {
    const expectedHoraire = [
      { jour: 'Lundi', horaire: 'lundi' },
      { jour: 'Mardi', horaire: 'mardi'},
      { jour: 'Mercredi', horaire: 'mercredi'},
      { jour: 'Jeudi', horaire: 'jeudi'},
      { jour: 'Vendredi', horaire: 'vendredi'},
      { jour: 'Samedi', horaire: 'samedi'},
      { jour: 'Dimanche', horaire: 'dimanche'}
    ];
    const mapppedHoraires = component.mapHoraires(component.library);
    expect(mapppedHoraires).toEqual(expectedHoraire);
  })

  // DOM tests
  // test if everything is diplayed properly
  it('should display everything properly', () => {
    const dom: HTMLElement = fixture.nativeElement;
    expect(dom.querySelector('#libelle').textContent).toEqual('test library libelle');
    expect(dom.querySelector('#adressAsString').textContent).toEqual(' test number rue test street, 11111 test city ');
    expect(dom.querySelector('#message')).toEqual('test message');
  })

});
