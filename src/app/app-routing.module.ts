import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/Security/signin/signin.component';
import { SignupComponent } from './components/Security/signup/signup.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'films',component:FilmsComponent},
{path:'contact',component:ContactComponent},
{path:'evenement',component:EvenementComponent},
{path: 'signin',component:SigninComponent},
{path: 'signup',component:SignupComponent},
{ path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
