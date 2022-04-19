import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateNationaliteComponent } from './add-update-nationalite.component';

describe('AddUpdateNationaliteComponent', () => {
  let component: AddUpdateNationaliteComponent;
  let fixture: ComponentFixture<AddUpdateNationaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateNationaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateNationaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
