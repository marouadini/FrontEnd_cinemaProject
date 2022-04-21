import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/shared/services/Personne/personne.service';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  constructor(private personneService:PersonneService) { }

  personnes;

  ngOnInit(): void {
   this.getPersonne();
  }

  getPersonne(){
     this.personneService.getAll().subscribe(data=>{
      this.personnes =data;
    })
  }
}
