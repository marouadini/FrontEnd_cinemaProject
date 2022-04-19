import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateFilmsComponent } from './add-update-films.component';

describe('AddUpdateFilmsComponent', () => {
  let component: AddUpdateFilmsComponent;
  let fixture: ComponentFixture<AddUpdateFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
