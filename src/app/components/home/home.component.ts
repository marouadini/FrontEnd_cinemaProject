import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/shared/services/Film/film.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
 
})
export class HomeComponent implements OnInit {

  public films : Film[];

  constructor(private filmService : FilmService) { }

  public getFilms(): void{
    this.filmService.getFilms().subscribe(
      (response: Film[]) => {
        this.films = response;
        console.log(response);
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  ngOnInit(): void {
   this.getFilms();
  }

}
