import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-ligne',
  templateUrl: './ajouter-ligne.component.html',
  styleUrl: './ajouter-ligne.component.css'
})
export class AjouterLigneComponent {
  plantNameEmpty: boolean = false;
  plantNameLabel: string = 'Nom de Plant';
  plantName : string = '' ;

  segmentName : string = '';
  segmentNameEmpty: boolean = false;
  segmentNameLabel: string = 'Nom de Segment';

  siteName : string = '' ;
  siteNameEmpty: boolean = false;
  siteNameLabel: string = 'Nom de Site';

  ligneName:string = ''
  ligneNameEmpty: boolean = false;
  ligneNameLabel : string = 'Nom De Votre Nouvelle Ligne';

  isEmpty() {
    if(!this.siteName){
      this.siteNameLabel = 'Veuillez choisir votre site' ;
      this.siteNameEmpty = true ;
    }
    else{
      this.siteNameLabel = 'Nom de Site' ;
      this.siteNameEmpty = false ;
    }

    if(!this.plantName){
      this.plantNameLabel = 'Veuillez choisir votre plant' ;
      this.plantNameEmpty = true ;
    }
    else{
      this.plantNameLabel = 'Nom de Plant' ;
      this.plantNameEmpty = false ;
    }

    if(!this.segmentName){
      this.segmentNameLabel = 'Veuillez choisir votre segment' ;
      this.segmentNameEmpty = true ;
    }
    else{
      this.segmentNameLabel = 'Nom de segment' ;
      this.segmentNameEmpty = false ;
    }

    if(!this.ligneName){
      this.ligneNameLabel = 'Veuillez choisir votre Ligne' ;
      this.ligneNameEmpty = true ;
    }
    else{
      this.ligneNameLabel = 'Nom de ligne' ;
      this.ligneNameEmpty = false ;
    }

  }


}
