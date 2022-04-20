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
  
  delete(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer')) {
      this.filmService.deleteFilm(id).subscribe((data) => {
        let index = this.films.findIndex((e) => e.id === id);
        this.films.splice(index, 1);
        console.log(data);
      });
    }
  }
}
