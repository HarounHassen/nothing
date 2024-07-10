import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-segment',
  templateUrl: './ajouter-segment.component.html',
  styleUrl: './ajouter-segment.component.css'
})
export class AjouterSegmentComponent {

  siteNameEmpty: boolean = false;
  siteNameLabel: string = 'Nom du Site';
  SiteName : string = ''

  plantNameEmpty: boolean = false ;
  plantNameLabel : string = 'Nom de Plant';
  plantName : string = ''

  segmentNameEmpty: boolean = false ;
  segmentNameLabel : string = 'Nom de votre Nouveau Segment';
  segmentName : string = ''

  isEmpty() {
    if(!this.SiteName){
      this.siteNameLabel = 'Veuillez choisir votre site'
      this.siteNameEmpty = true ;
    }else {
      this.siteNameLabel = 'Nom du Site'
      this.siteNameEmpty = false ;
    }
    if(!this.plantName){
      this.plantNameLabel = 'Veuillez choisir votre plant'
      this.plantNameEmpty = true ;
    }else {
      this.plantNameLabel = 'Nom du plant'
      this.plantNameEmpty = false ;
    }
    if(!this.segmentName){
      this.segmentNameLabel = 'Veuillez choisir votre segment'
      this.segmentNameEmpty = true ;
    }else {
      this.segmentNameLabel = 'Nom de votre Nouveau Segment'
      this.segmentNameEmpty = false ;
    }
  }
}
