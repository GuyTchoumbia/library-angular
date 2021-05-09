import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoComponent } from './account-info.component';
import { FormBuilder } from '@angular/forms';
import { testUser } from 'src/app/test/testData';
import { AuthenticationService } from 'src/app/auth/authentication.service';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;
  let fixture: ComponentFixture<AccountInfoComponent>;
  const stubAuthService = {
    getUser: jasmine.createSpy().and.returnValue({
      subscribe: jasmine.createSpy()
    })
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountInfoComponent ],
      providers: [
        FormBuilder,
        { provide: AuthenticationService, useValue: stubAuthService }
      ]
    })
    fixture = TestBed.createComponent(AccountInfoComponent);
    component = fixture.componentInstance;

    spyOn(component, 'parseDataToForm').and.callThrough();
    component.user = testUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.parseDataToForm).toHaveBeenCalled();
  });

  // test parseDataToForm()

  it('should parse the data to the form', () => {
    const parsedData = component.parseDataToForm(testUser);
    expect(parsedData.controls.numero.value).toBe('test numero');
    expect(parsedData.controls.rue.value).toBe('test street');
    expect(parsedData.controls.codePostal.value).toBe(4345);
    expect(parsedData.controls.ville.value).toBe('test city');
    expect(parsedData.controls.email.value).toBe('test email');
    expect(parsedData.controls.phone.value).toBe('test phone');
  })

  it('should diplay the data in the form', () => {
    const dom = fixture.nativeElement;
    expect(dom.querySelector('#id').textContent).toBe('1');
    expect(dom.querySelector('#nom').textContent).toBe('test nom');
    expect(dom.querySelector('#prenom').textContent).toBe('test prenom');
    expect(dom.querySelector('#birthdate').textContent).toBe('1/1/70'); // Date(0) is first of january, 1970
    expect(dom.querySelector('#address').textContent).toBe('test numero test street 4345 test city');
    expect(dom.querySelector('#phone').textContent).toBe('test phone');
    expect(dom.querySelector('#email').textContent).toBe('test email');
  })
});
