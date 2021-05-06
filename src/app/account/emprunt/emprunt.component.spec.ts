import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpruntComponent } from './emprunt.component';
import { testUserCote } from 'src/app/test/testData';


describe('EmpruntComponent', () => {
  let component: EmpruntComponent;
  let fixture: ComponentFixture<EmpruntComponent>;
  const userCote = testUserCote;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpruntComponent]
    })
    fixture = TestBed.createComponent(EmpruntComponent);
    component = fixture.componentInstance;
    component.userCote = userCote;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
