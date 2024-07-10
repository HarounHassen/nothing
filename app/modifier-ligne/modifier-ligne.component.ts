import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-ligne',
  templateUrl: './modifier-ligne.component.html',
  styleUrl: './modifier-ligne.component.css'
})
export class ModifierLigneComponent {

  siteNameEmpty: boolean = false;
  siteNamelabel: string = 'Nom de Site';
  siteName : string = '';

  plantNameEmpty: boolean = false;
  plantNamelabel: string = 'Nom de Plant';
  plantName : string = '';


  isEmpty() {
    if (!this.siteName){
      this.siteNamelabel = 'Veuillez entrer le nom de site' ;
      this.siteNameEmpty = true ;
    }else{
      this.siteNamelabel = 'Nom de Site';
      this.siteNameEmpty = false ;
    }
    if (!this.plantName){
      this.plantNamelabel = 'Veuillez entrer le nom de plant' ;
      this.plantNameEmpty = true ;
    }else{
      this.plantNamelabel = 'Nom de Plant';
      this.plantNameEmpty = false ;
    }
  }
}
