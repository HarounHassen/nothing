import { Component } from '@angular/core';


@Component({
  selector: 'app-modifier-site',
  templateUrl: './modifier-site.component.html',
  styleUrl: './modifier-site.component.css'
})
export class ModifierSiteComponent {

  siteName : string = '';
  sitenamelabel : string = 'Nom de votre site' 
  siteNameEmpty : boolean = false ;

 

  isEmpty(){
    if(!this.siteName){
      this.sitenamelabel = 'Veuillez entrer le nom de site' ;
      this.siteNameEmpty = true ;
    }else{
      this.siteNameEmpty = false ;
      this.sitenamelabel = 'Nom de votre site'
    }
  }
  
}
