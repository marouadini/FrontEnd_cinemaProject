import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/shared/services/Film/film.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public films : any[]=[];
  cp  = 1;
  constructor(private filmService: FilmService) { }
  
  public getFilmsPage(): void {
    this.filmService.getFilmPage(this.cp,7).subscribe(
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
  
  /*
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
    }*/

  ngOnInit(): void {
    // this.getFilms();
    this.getFilmsPage();
  }

}
