import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthentificationPageComponent } from './authentification-page/authentification-page.component';

import { ReinitialisationMDPComponent } from './reinitialisation-mdp/reinitialisation-mdp.component';

import { CodeVerificationComponent } from './code-verification/code-verification.component';

import { ProfileComponent } from './profile/profile.component';

import { ParametresComponent } from './parametres/parametres.component';

import { ModifierSiteComponent } from './modifier-site/modifier-site.component';

import { AjoutSiteComponent } from './ajout-site/ajout-site.component';

import { ModifierPlantComponent } from './modifier-plant/modifier-plant.component';

import { AjouterPlantComponent } from './ajouter-plant/ajouter-plant.component';

import { ModifierSegmentComponent } from './modifier-segment/modifier-segment.component';

import { AjouterSegmentComponent } from './ajouter-segment/ajouter-segment.component';

import { ModifierLigneComponent } from './modifier-ligne/modifier-ligne.component';

import { AjouterLigneComponent } from './ajouter-ligne/ajouter-ligne.component';


const routes: Routes = [
  {
    path:'',
    component: AuthentificationPageComponent 
  },
  {
    path:'reinitialisation-mdp',
    component: ReinitialisationMDPComponent    
  },
  { path: 'code-verification', 
    component: CodeVerificationComponent
   },
  { path: 'profile', 
    component: ProfileComponent 
  },
  { path: 'parametres', 
    component: ParametresComponent
  }
  ,
  { path: 'modifier-site', 
    component: ModifierSiteComponent
  },
  { path: 'ajout-site', 
    component: AjoutSiteComponent
  }
  ,
  { path: 'modifier-plant', 
    component: ModifierPlantComponent
  } ,
  { path: 'ajouter-plant', 
    component: AjouterPlantComponent
  },
  { path: 'modifier-segment', 
    component: ModifierSegmentComponent
  }
  ,
  { path: 'ajouter-segment', 
    component: AjouterSegmentComponent
  }
  ,
  { path: 'modifier-ligne', 
    component: ModifierLigneComponent
  }
  ,
  { path: 'ajouter-ligne', 
    component: AjouterLigneComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
