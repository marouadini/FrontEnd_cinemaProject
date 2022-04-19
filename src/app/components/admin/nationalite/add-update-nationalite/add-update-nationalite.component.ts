import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Nationalite } from 'src/app/shared/Models/Nationalite';
import { NationaliteService } from 'src/app/shared/services/Nationalite/nationalite.service';

@Component({
  selector: 'app-add-update-nationalite',
  templateUrl: './add-update-nationalite.component.html',
  styleUrls: ['./add-update-nationalite.component.css'],
})
export class AddUpdateNationaliteComponent implements OnInit {
  form: FormGroup;
  validationMesage: string;
  nationalite: Nationalite = new Nationalite();
  mode: string = 'add';
  constructor(
    private fb: FormBuilder,
    private nationaliteService: NationaliteService,
    private activateedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    let id: number = this.activateedRoute.snapshot.params['id'];
    if (id) {
      this.nationaliteService.getById(id).subscribe((data) => {
        this.nationalite = data;
        this.form.patchValue(this.nationalite);
        this.mode = 'edit';
      });
    }
  }

  createForm() {
    this.form = this.fb.group({
      libelle: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.nationalite.libelle = this.form.get('libelle').value;
    if (this.mode === 'add') {
      this.nationaliteService.add(this.nationalite).subscribe(
        (data) => {
          this.validationMesage = 'Nationalite ajouter avec succes';
        },
        (error) => {
          this.validationMesage = "il ya un problem dans l'ajoute";
        }
      );
      this.form.reset();
    } else {
      this.nationaliteService.update(this.nationalite).subscribe(
        (data) => {
          this.validationMesage = 'mise a jour reusse';
        },
        (error) => {
          this.validationMesage = 'Problem de mese a jour';
        }
      );
    }
    setInterval(() => {
      this.validationMesage = null;
    }, 3000);
  }
}
