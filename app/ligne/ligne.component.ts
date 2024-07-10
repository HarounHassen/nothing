import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrl: './ligne.component.css'
})
export class LigneComponent {

  constructor( private router : Router){

  }

  Modifier() {
    this.router.navigate(['modifier-ligne']);
  }


  Ajouter() {
    this.router.navigate(['ajouter-ligne']);
  }

}
