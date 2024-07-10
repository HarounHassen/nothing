import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-site',
  templateUrl: './ajout-site.component.html',
  styleUrl: './ajout-site.component.css'
})
export class AjoutSiteComponent {
  siteName: string = '';
  siteNameLabel = "Nom de votre nouveau Site" ;
  siteNameEmpty : boolean = false ;

  isEmpty(){
    if(!this.siteName){
      this.siteNameLabel = "Veuillez entrer le nom de l'oraganisation" ;
      this.siteNameEmpty = true ;
    }else{
      this.siteNameLabel = "Nom de votre nouveau Site" ;
      this.siteNameEmpty = false ;
    }
  }


}
