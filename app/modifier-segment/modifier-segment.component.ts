import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-segment',
  templateUrl: './modifier-segment.component.html',
  styleUrl: './modifier-segment.component.css'
})
export class ModifierSegmentComponent {

  siteName : string = ''
  siteNamelabel: string = 'Nom de site';
  siteNameEmpty: boolean = false;

  plantName : string = ''
  plantNamelabel: string = 'nom de Plant';
  plantNameEmpty: boolean = false;

  segmentName: string = '';
  segmentNameLabel : string = 'Nom de votre Segments';
  segmentNameEmpty : boolean = false ;

  isEmpty() {
    if(!this.siteName){
      this.siteNamelabel = 'Veuillez entrer le nom de site';
      this.siteNameEmpty = true ;
    }else{
      this.siteNamelabel = 'Nom de site';
      this.siteNameEmpty = false ;
    }

    if(!this.plantName){
      this.plantNamelabel = 'Veuillez entrer le nom de plant';
      this.plantNameEmpty = true ;
    }else{
      this.plantNamelabel = 'Nom de plant';
      this.plantNameEmpty = false ;
    }
    if(!this.segmentName){
      this.segmentNameLabel = 'Veuillez entrer le nom de segment';
      this.segmentNameEmpty = true ;
    }else{
      this.segmentNameLabel = 'Nom de segment';
      this.segmentNameEmpty = false ;
    }
  }
}
