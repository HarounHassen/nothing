import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationPageComponent } from './authentification-page/authentification-page.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';

import { ReinitialisationMDPComponent } from './reinitialisation-mdp/reinitialisation-mdp.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProfileComponent } from './profile/profile.component';
import { ParametresComponent } from './parametres/parametres.component';
import { StructureComponent } from './structure/structure.component';
import { ModifierSiteComponent } from './modifier-site/modifier-site.component';
import { AjoutSiteComponent } from './ajout-site/ajout-site.component';
import { StructurePlantComponent } from './structure-plant/structure-plant.component';
import { ModifierPlantComponent } from './modifier-plant/modifier-plant.component';
import { AjouterPlantComponent } from './ajouter-plant/ajouter-plant.component';
import { StructureSegmentComponent } from './structure-segment/structure-segment.component';
import { ModifierSegmentComponent } from './modifier-segment/modifier-segment.component';
import { AjouterSegmentComponent } from './ajouter-segment/ajouter-segment.component';
import { LigneComponent } from './ligne/ligne.component';
import { ModifierLigneComponent } from './modifier-ligne/modifier-ligne.component';
import { AjouterLigneComponent } from './ajouter-ligne/ajouter-ligne.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjouterUtilisateurEtape1Component } from './ajouter-utilisateur-etape1/ajouter-utilisateur-etape1.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationPageComponent,
    HeaderComponent,
    ReinitialisationMDPComponent,
    CodeVerificationComponent,
    AcceuilComponent,
    ProfileComponent,
    ParametresComponent,
    StructureComponent,
    ModifierSiteComponent,
    AjoutSiteComponent,
    StructurePlantComponent,
    ModifierPlantComponent,
    AjouterPlantComponent,
    StructureSegmentComponent,
    ModifierSegmentComponent,
    AjouterSegmentComponent,
    LigneComponent,
    ModifierLigneComponent,
    AjouterLigneComponent,
    UtilisateurComponent,
    AjouterUtilisateurEtape1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
