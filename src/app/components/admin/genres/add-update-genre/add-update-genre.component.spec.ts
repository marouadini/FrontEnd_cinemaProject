import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateGenreComponent } from './add-update-genre.component';

describe('AddUpdateGenreComponent', () => {
  let component: AddUpdateGenreComponent;
  let fixture: ComponentFixture<AddUpdateGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
