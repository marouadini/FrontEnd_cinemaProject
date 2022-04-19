import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/services/Film/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films : any[];
  constructor(private filmService : FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe (response =>{this.films = response;console.log(response);})
  }

}
