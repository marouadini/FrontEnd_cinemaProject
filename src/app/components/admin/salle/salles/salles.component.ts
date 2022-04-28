import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/interfaces/salle';
import { SalleService } from 'src/app/shared/services/Salle/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  public salles : Salle[]=[];
  constructor(private salleService: SalleService , private router:Router) { }

  ngOnInit(): void {
    this.getSalles();
  }

  public getSalles(): void{
    this.salleService.getSalles().subscribe(
      (response: any[]) => {
        this.salles = response;
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

updateSalle(id: number){
  this.router.navigate(['admin/updateSalle',id]);
}




delete(idSalle:number){
  if(confirm("Êtes-vous sûr de vouloir supprimer")) {
     this.salleService.deleteSalle(idSalle).subscribe(data =>{
    console.log(data)
    const index = this.salles.findIndex(e=>e.id===idSalle)
    this.salles.splice(index,1);
  })
  }
}
}