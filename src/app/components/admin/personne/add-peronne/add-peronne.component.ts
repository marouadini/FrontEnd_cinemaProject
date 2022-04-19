import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationaliteService } from 'src/app/shared/services/Nationalite/nationalite.service';
import { PersonneService } from 'src/app/shared/services/Personne/personne.service';

@Component({
  selector: 'app-add-peronne',
  templateUrl: './add-peronne.component.html',
  styleUrls: ['./add-peronne.component.css'],
})
export class AddPeronneComponent implements OnInit {
  constructor(
    private nationaliteService: NationaliteService,
    private buildForm: FormBuilder,
    private presonneService: PersonneService
  ) {}

  form: FormGroup;
  nationalites;
  photo: File;
  validationMesage = null;
  ngOnInit(): void {
    this.createForm();
    this.nationaliteService.getAll().subscribe((data) => {
      this.nationalites = data;
    });
  }

  createForm(): void {
    this.form = this.buildForm.group({
      nom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      prenom: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      date_naissance: ['', Validators.required],
      nationalite: ['', Validators.required],
      typePersonne: ['', Validators.required],
      photo: [''],
    });
  }

  onSubmit() {
    //form prsonne object to store it
    let personne = {
      nom: this.form.get('nom').value,
      prenom: this.form.get('prenom').value,
      dateNaissance: new Date(this.form.get('date_naissance').value),
      typePersonne: this.form.get('typePersonne').value,
      nationalite: {
        id: parseInt(this.form.get('nationalite').value),
        libelle: '',
      },
    };

    let fdataPersonne = new FormData();
    fdataPersonne.append('personne', JSON.stringify(personne));
    fdataPersonne.append('photo', this.photo);
    this.presonneService.add(fdataPersonne).subscribe(
      (data) => {
        this.validationMesage = 'Personne Ajouter avec success';
      },
      (error) => {
        this.validationMesage = "Un error dans l'operation d'ajouter";
      }
    );
    setInterval(() => {
      this.validationMesage = null;
    }, 3000);
    this.form.reset();
  }

  getImage(event) {
    this.photo = event.target.files[0];
  }
}
