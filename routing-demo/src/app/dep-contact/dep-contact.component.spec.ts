import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepContactComponent } from './dep-contact.component';

describe('DepContactComponent', () => {
  let component: DepContactComponent;
  let fixture: ComponentFixture<DepContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
