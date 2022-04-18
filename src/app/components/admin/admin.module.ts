import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddPeronneComponent } from './personne/add-peronne/add-peronne.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AddPeronneComponent,
    PersonnesComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule ,
  FormsModule  ]
})
export class AdminModule { }
