import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmprunterComponent } from './emprunter.component';

describe('EmprunterComponent', () => {
  let component: EmprunterComponent;
  let fixture: ComponentFixture<EmprunterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprunterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
