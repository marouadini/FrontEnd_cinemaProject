import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { GenreService } from 'src/app/shared/services/Genre/genre.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private genreService:GenreService) { }
  genres;

  ngOnInit(): void {
          this.genreService.getAll().subscribe(date=>{
            this.genres = date;
            console.log(date)
          })
  }

 filterByGenre(id:number){
   console.log(id)
 }
  
}
