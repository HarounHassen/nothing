import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reinitialisation-mdp',
  templateUrl: './reinitialisation-mdp.component.html',
  styleUrls: ['./reinitialisation-mdp.component.css']
})
export class ReinitialisationMDPComponent {

  email : string = '' ;
  emailLabel : string = '' ;
  isEmailEmpty: boolean = false;

constructor(private router : Router){}

  isEmpty() {
  if(!this.email){
    this.emailLabel = "Veuillez entrer l'email" ;
    this.isEmailEmpty = true ;
  } else if(this.email){
    this.router.navigate(['code-verification']);
  }
  }
}
