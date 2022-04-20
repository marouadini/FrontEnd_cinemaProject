import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPeronneComponent } from './personne/add-peronne/add-peronne.component';
import { AdminComponent } from './admin.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';
import { GenreComponent } from './genre/genre.component';
import { FilmComponent } from './film/film.component';
import { AddUpdateGenreComponent } from './genres/add-update-genre/add-update-genre.component';
import { AddUpdateFilmsComponent } from './film/films/add-update-films/add-update-films.component';
import { NationaliteComponent } from './nationalite/nationalite/nationalite.component';
import { AddUpdateNationaliteComponent } from './nationalite/add-update-nationalite/add-update-nationalite.component';

const routes: Routes = [
  {
    path: '',component: AdminComponent,
    children: [
      {
        path: '',component: FilmComponent
      },
      {
        path: 'addFilm',
        component: AddUpdateFilmsComponent,
      },
      {
        path: 'updateFilm/:id',
        component: AddUpdateFilmsComponent,
      },
      {
        path: 'ajouterPersonne',
        component: AddPeronneComponent,
      },
      {
        path: 'personnes',
        component: PersonnesComponent,
      },
      {
        path: 'genres',
        component: GenreComponent,
      },
      {
        path: 'addUpdateGenre/:id',
        component: AddUpdateGenreComponent,
      },
      {
        path: 'addUpdateGenre',
        component : AddUpdateGenreComponent
      },
      {
        path: 'Nationalites',
        component : NationaliteComponent
      },
      {
        path: 'addUpdateNationalite/:id',
        component: AddUpdateNationaliteComponent,
      },
      {
        path: 'addUpdateNationalite',
        component : AddUpdateNationaliteComponent
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
