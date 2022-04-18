import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeronneComponent } from './add-peronne.component';

describe('AddPeronneComponent', () => {
  let component: AddPeronneComponent;
  let fixture: ComponentFixture<AddPeronneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeronneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeronneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
