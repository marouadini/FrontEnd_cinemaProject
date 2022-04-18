import { Component, OnInit } from '@angular/core';
import { NationaliteService } from 'src/app/shared/services/Nationalite/nationalite.service';

@Component({
  selector: 'app-add-peronne',
  templateUrl: './add-peronne.component.html',
  styleUrls: ['./add-peronne.component.css']
})
export class AddPeronneComponent implements OnInit {

  constructor(private nationaliteService : NationaliteService) { }

  nationalites;
  ngOnInit(): void {
    this.nationaliteService.getAll().subscribe(data=>{
        this.nationalites=data ;
      })
  }
}
