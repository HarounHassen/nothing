import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-plant',
  templateUrl: './modifier-plant.component.html',
  styleUrl: './modifier-plant.component.css'
})
export class ModifierPlantComponent {
  siteName: string = '';
  siteNamelabel: string = 'Nom de votre Site';

  plantName: string ='' ;
  plantNamelabel : string = 'Nom de votre Plant'

  siteNameEmpty: boolean = false;
  plantNameEmpty: boolean = false ;


  isEmpty(){
    if(!this.siteName){
      this.siteNamelabel = 'Veuillez entrer le nom de site' ;
      this.siteNameEmpty = true ;
    }else{
      this.siteNameEmpty = false ;
      this.siteNamelabel = 'Nom de votre site'
    }if(!this.plantName){
      this.plantNamelabel = 'Veuillez entrer le nom de plant'
      this.plantNameEmpty = true ;
    }else{
      this.plantNameEmpty = false ;
      this.plantNamelabel = 'Nom de votre plant'
    }
 
  }
}
