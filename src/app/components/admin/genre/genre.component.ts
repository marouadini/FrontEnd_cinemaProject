import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GenreService } from 'src/app/shared/services/Genre/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private genreService : GenreService , private route:Router) { }

  genres=[];
  ngOnInit(): void {

    this.genreService.getAll().subscribe(data=>{
      this.genres= data;
    })
  }

  prepareModification(id:number){
    this.route.navigate(["/admin/addUpdateGenre/"+id])

  }

}
