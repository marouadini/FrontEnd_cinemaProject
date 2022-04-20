import { Component, OnInit } from '@angular/core';
import { SeanceService } from 'src/app/shared/services/Seance/seance.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Seance } from 'src/app/interfaces/seance';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  public seances : Seance[]=[];

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
    this.getSeances();    
  }

  public getSeances(): void{
    this.seanceService.getSeances().subscribe(
      (response: any[]) => {
        this.seances = response;
        console.log(response);
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
}

  formatDate(date: any):any{
    date =  new Date(date);
    return date.toDateString().substring(3);
  }


}
