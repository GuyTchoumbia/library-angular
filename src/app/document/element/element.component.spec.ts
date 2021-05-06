import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ElementComponent } from './element.component';
import { testDocument } from 'src/app/test/testData';
import { Router } from '@angular/router';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;
  const mockRouter = jasmine.createSpyObj('router', ['navigate']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementComponent ],
      providers: [{ provide: Router, useValue: mockRouter }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
    component.document = testDocument;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
