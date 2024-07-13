import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ServicesComponent } from './composants/services/services.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ContactComponent } from './composants/contact/contact.component';
import { AboutComponent } from './composants/about/about.component';
import { EventComponent } from './composants/event/event.component';
import { MarketplaceComponent } from './composants/marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    EventComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
