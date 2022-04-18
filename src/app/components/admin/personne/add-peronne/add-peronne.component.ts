import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationaliteService } from 'src/app/shared/services/Nationalite/nationalite.service';

@Component({
  selector: 'app-add-peronne',
  templateUrl: './add-peronne.component.html',
  styleUrls: ['./add-peronne.component.css']
})
export class AddPeronneComponent implements OnInit {

  constructor(private nationaliteService : NationaliteService, private buildForm:FormBuilder) { }

  form:FormGroup;
  nationalites;
  ngOnInit(): void {

    this.createForm();
    this.nationaliteService.getAll().subscribe(data=>{
        this.nationalites=data ;
      })
  }

  createForm(){
      this.form = this.buildForm.group({
        nom:["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
        prenom:["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
        date_naissance:["", Validators.required],
        nationalite:["", Validators.required],
        typePersonne:["", Validators.required],
      })
  }

  onSubmit(){
    console.log(this.form.value)
  }
  

}
