import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-plant',
  templateUrl: './ajouter-plant.component.html',
  styleUrl: './ajouter-plant.component.css'
})
export class AjouterPlantComponent {

  SiteName : string = '';
  siteNameLabel : string = 'Choisir votre site:'
  siteNameEmpty : boolean = false ; 

  isEmpty() {
    if(!this.SiteName){
      this.siteNameLabel = 'Veuillez choisir votre site:';
      this.siteNameEmpty = true ;
    }else {
      this.siteNameLabel = 'Choisir votre site:'
      this.siteNameEmpty = false ;
    }
  }
}
