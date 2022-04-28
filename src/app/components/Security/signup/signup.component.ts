import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email])
  })

  get email(){return this.loginForm.get('email')}
  constructor() { }

  ngOnInit(): void {
  }

}
