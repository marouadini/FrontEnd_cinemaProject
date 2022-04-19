import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPeronneComponent } from './personne/add-peronne/add-peronne.component';
import { AdminComponent } from './admin.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';
import { GenreComponent } from './genre/genre.component';
import { AddUpdateGenreComponent } from './genres/add-update-genre/add-update-genre.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
