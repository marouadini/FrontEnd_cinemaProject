import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/interfaces/salle';
import { SalleService } from 'src/app/shared/services/Salle/salle.service';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  constructor(private salleService: SalleService) { }

  ngOnInit(): void {
  }
  public onAddSalle(addSalleForm: any): void {
    let salle = addSalleForm.value;

    this.salleService.addSalle(salle).subscribe(
      (response: Salle) => {
        console.log(response);
        this.salleService.getSalles();
        addSalleForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addSalleForm.reset();
      }
    );
  }
}
