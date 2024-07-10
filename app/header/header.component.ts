import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  menuIsVisible:boolean =  false ;
  menu : any = {
    LanguageDropdown : false ,
    UserDropdown : false
  } ;


  constructor(private router : Router){}


  toggleMenu(menu: any , event: MouseEvent){  
    this.menu[menu] = ! this.menu[menu] ;

    Object.keys(this.menu).forEach(key => {
      if(menu != key){
        this.menu[key] = false;
      }
    }) 
  }

  @HostListener('document:click', ['$event']) // Écouteur d'événements de clic sur le document
  closeMenus(event: Event) {
    const target = event.target as HTMLElement; // Cible de l'événement de clic
    if (!target.closest('.dropdown')) { // Vérifie si le clic n'est pas à l'intérieur d'un élément avec la classe 'dropdown'
      this.menu.LanguageDropdown = false; // Ferme le menu déroulant de la langue
      this.menu.UserDropdown = false;     // Ferme le menu déroulant de l'utilisateur
    }
  }
  
  navigateToProfile() {
    this.router.navigate(['profile'])
  }

  navigateToHome(){
    this.router.navigate([''])
  }

  navigateToParametre() {
    this.router.navigate(['parametres'])
    }

}