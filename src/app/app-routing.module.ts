import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ServicesComponent } from './composants/services/services.component';
import { ContactComponent } from './composants/contact/contact.component';
import { AboutComponent } from './composants/about/about.component';
import { EventComponent } from './composants/event/event.component';

const routes: Routes = [
  {path: 'accueil', component:AccueilComponent},
  {path:'service', component: ServicesComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'event', component:EventComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
