import { HttpErrorResponse } from '@angular/common/http';

import { FilmService } from 'src/app/shared/services/Film/film.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { GenreService } from 'src/app/shared/services/Genre/genre.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
 // filmService: any;

  constructor(private genreService:GenreService,
    private filmService: FilmService) { }
  genres;
  public films : any[]=[];
  cp  = 1;
  ngOnInit(): void {
          this.genreService.getAll().subscribe(date=>{
            this.genres = date;
            console.log(date)
          });
         this.getFilmsPage();
  }

 filterByGenre(id:number){
   console.log(id)
 }

 public getFilmsPage(): void {
  this.filmService.getFilmPage(this.cp,14).subscribe(
    (response : any[] ) => {
      for (let i = 0; i < response.length; i++) {
         this.films.push(response[i]); 
      }
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
  this.cp++;
}
}
