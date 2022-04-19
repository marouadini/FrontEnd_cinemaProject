import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddPeronneComponent } from './personne/add-peronne/add-peronne.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenreComponent } from './genre/genre.component';
import { AddUpdateGenreComponent } from './genres/add-update-genre/add-update-genre.component';
import { NationaliteComponent } from './nationalite/nationalite/nationalite.component';
import { AddUpdateNationaliteComponent } from './nationalite/add-update-nationalite/add-update-nationalite.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddPeronneComponent,
    PersonnesComponent,
    GenreComponent,
    AddUpdateGenreComponent,
    NationaliteComponent,
    AddUpdateNationaliteComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule ,
  FormsModule  ]
})
export class AdminModule { }
