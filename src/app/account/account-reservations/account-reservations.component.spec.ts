import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReservationsComponent } from './account-reservations.component';

describe('AccountReservationsComponent', () => {
  let component: AccountReservationsComponent;
  let fixture: ComponentFixture<AccountReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
