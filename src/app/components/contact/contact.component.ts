import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
  name :new FormControl('',Validators.required),
  prenom :new FormControl('',Validators.required),
  email :new FormControl('',[Validators.required,Validators.email]),
  message : new FormControl('',Validators.required)
  });
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  get name(){ return this.contactForm.get('name');}
  get prenom(){ return this.contactForm.get('prenom');}
  get email(){ return this.contactForm.get('email');}
  get message(){ return this.contactForm.get('message');}

  onSubmit(): void {
    this.submitted = true;
    if(this.contactForm.invalid){
      return;
    }
    console.log(this.contactForm);
  }


}
