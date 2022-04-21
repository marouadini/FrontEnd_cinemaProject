import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email])
  })

  get email(){return this.loginForm.get('email')}
  constructor() { }

  ngOnInit(): void {
  }

}
