import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/services/Film/film.service';
import { NgForm } from '@angular/forms';
import { Film } from 'src/app/interfaces/film';
import { HttpErrorResponse } from '@angular/common/http';
import { NationaliteService } from 'src/app/shared/services/Nationalite/nationalite.service';
import { PersonneService } from 'src/app/shared/services/Personne/personne.service';
import { GenreService } from 'src/app/shared/services/Genre/genre.service';
import { Genre } from 'src/app/shared/Models/Genre';
import { Nationalite } from 'src/app/shared/Models/Nationalite';
import { Realisateur } from 'src/app/interfaces/Realisateur';
@Component({
  selector: 'app-add-update-films',
  templateUrl: './add-update-films.component.html',
  styleUrls: ['./add-update-films.component.css']
})
export class AddUpdateFilmsComponent implements OnInit {
  constructor(private filmService: FilmService,
    private nationaliteService: NationaliteService,
    private personeService: PersonneService,
    private genreService: GenreService) { }

  nationalites;
  realisateurs;
  genres;
  photo: File;
  ngOnInit(): void {
    this.nationaliteService.getAll().subscribe((data) => {
      this.nationalites = data;
    });
    this.personeService.getAll().subscribe((data) => {
      this.realisateurs = data;
    });
    this.genreService.getAll().subscribe((data) => {
      this.genres = data;
    });
  }
  
  onAddFilm(addForm: NgForm): void {
    console.log(addForm.value);
    let film = {
      duree: parseInt(addForm.control.get("duree").value),
      titre: addForm.control.get("titre").value,
      annee: addForm.control.get("annee").value,
      realisateur: addForm.control.get("realisateur").value,
      genre: addForm.control.get("genre").value,
      nationalite: addForm.control.get("nationalite").value
    }
    let fdataFilm = new FormData();
    fdataFilm.append('film', JSON.stringify(film));

    fdataFilm.append('photo', this.photo);

    this.filmService.addFilm(fdataFilm).subscribe(
      (response: Film) => {
        console.log(response);
        this.filmService.getFilms();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(film: Film): void {
    this.filmService.updateFilm(film).subscribe(
      (response: Film) => {
        console.log(response);
        this.filmService.getFilms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  getImage(event) {
    this.photo = event.target.files[0];
  }

}
