import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css'
})
export class StructureComponent {


  constructor(private router : Router){

  }

  Modifier(){
    this.router.navigate(['modifier-site'])
  }

  Ajouter() {
    this.router.navigate(['ajout-site']);
    }

}
