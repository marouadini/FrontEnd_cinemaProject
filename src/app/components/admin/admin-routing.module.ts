import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPeronneComponent } from './personne/add-peronne/add-peronne.component';
import { AdminComponent } from './admin.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';

const routes: Routes = [{ path: '', component: AdminComponent , children:[{
  path: 'ajouterPersonne', component: AddPeronneComponent
},{
  path: 'personnes', component: PersonnesComponent
}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
