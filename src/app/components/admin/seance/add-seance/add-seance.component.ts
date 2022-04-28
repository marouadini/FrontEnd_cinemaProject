import { Component, OnInit } from '@angular/core';
import { Seance } from 'src/app/interfaces/seance';
import { SeanceService } from 'src/app/shared/services/Seance/seance.service';
import { FilmService } from 'src/app/shared/services/Film/film.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SalleService } from 'src/app/shared/services/Salle/salle.service';
import { Film } from 'src/app/interfaces/film';
import { Salle } from 'src/app/interfaces/salle';
@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {

  constructor(
    private seanceService: SeanceService,
    private filmService: FilmService,
    private salleService: SalleService    
  ) { }

  films: Film[];
  salles: Salle[];
  
  ngOnInit(): void {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data;
    });

    this.salleService.getSalles().subscribe((data) => {
      this.salles= data;
    });
  }

  public onAddSeance(addForm: any): void {
    let seance = addForm.value;
    seance.film = { id: Number(seance.film) }
    seance.salle = { id: Number(seance.salle) }

    this.seanceService.addSeance(seance).subscribe(
      (response: Seance) => {
        console.log(response);
        this.seanceService.getSeances();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
