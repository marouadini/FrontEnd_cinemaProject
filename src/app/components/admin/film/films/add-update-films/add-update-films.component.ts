import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/services/Film/film.service';

@Component({
  selector: 'app-add-update-films',
  templateUrl: './add-update-films.component.html',
  styleUrls: ['./add-update-films.component.css']
})
export class AddUpdateFilmsComponent implements OnInit {

  constructor(private filmService : FilmService) { }

  ngOnInit(): void {
  }

  AddFilm(){
    let fdataFilm = new FormData();
    this.filmService.addFilm(fdataFilm).subscribe(
      (data) => {

      },
      (error) => {

      }
    );
  }

}
