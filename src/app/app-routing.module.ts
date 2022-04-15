import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'films',component:FilmsComponent},
{path:'contact',component:ContactComponent},
{path:'evenement',component:EvenementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
