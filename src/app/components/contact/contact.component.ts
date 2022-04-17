import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name : string;
  prenom : string;
  email : string;
  message : string;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    alert('test');
  }

}
