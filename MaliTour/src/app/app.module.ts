import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegionComponent } from './region/region.component';
import { DetailRegionComponent } from './detail-region/detail-region.component';
import { AjoutregionComponent } from './ajoutregion/ajoutregion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent,
    InscriptionComponent,
    RegionComponent,
    DetailRegionComponent,
    AjoutregionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
