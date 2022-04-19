import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { data } from 'jquery';
import { Genre } from 'src/app/shared/Models/Genre';
import { GenreService } from 'src/app/shared/services/Genre/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private genreService : GenreService , private route:Router) { }

  genres:Genre[]=[];
  ngOnInit(): void {

    this.genreService.getAll().subscribe(data=>{
      this.genres= data;
    })
  }

  prepareModification(id:number){
    this.route.navigate(["/admin/addUpdateGenre/"+id])

  }

  delete(idGenre:number){
    if(confirm("Êtes-vous sûr de vouloir supprimer")) {
       this.genreService.delete(idGenre).subscribe(data =>{
      console.log(data)
      const index = this.genres.findIndex(e=>e.id===idGenre)
      this.genres.splice(index,1);
    })
    }
   
  }

}
