import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Genre } from 'src/app/shared/Models/Genre';
import { GenreService } from 'src/app/shared/services/Genre/genre.service';

@Component({
  selector: 'app-add-update-genre',
  templateUrl: './add-update-genre.component.html',
  styleUrls: ['./add-update-genre.component.css'],
})
export class AddUpdateGenreComponent implements OnInit {
  idGenre;
  mode: string = 'add';
  form: FormGroup;
  validationMesage;
  genre:Genre = new Genre();
  constructor(
    private fb: FormBuilder,
    private genreService: GenreService,
    private actRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  async ngOnInit() {
    await this.actRoute.paramMap.subscribe((data) => {
      if (data.get('id') != undefined) {
        this.genreService
          .getByid(parseInt(data.get('id')))
          .subscribe((data: Genre) => {
            this.genre = data;
            this.mode = 'edit';
            this.form.patchValue(this.genre);
          });
      }
    });
  }

  createForm() {
    this.form = this.fb.group({
      libelle: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.genre.libelle = this.form.get('libelle').value;
    if (this.mode === 'add') {
      this.genreService.add(this.genre).subscribe(
        (data) => {
          this.validationMesage = 'Genre ajouter avec succes';
        },
        (error) => {
          this.validationMesage = "il ya un problem dans l'ajoute";
        }
      );
      this.form.reset();

    }else{
      this.genreService.update(this.genre).subscribe(
        (data) => {
          this.validationMesage = 'mese a jour reusse';

        },
        (error) => {
          this.validationMesage = "Problem de mese a jour";
        }
      );
    }
  }
}
