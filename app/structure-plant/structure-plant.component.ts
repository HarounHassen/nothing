import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-structure-plant',
  templateUrl: './structure-plant.component.html',
  styleUrl: './structure-plant.component.css'
})
export class StructurePlantComponent {

  
  constructor(private router : Router){

  }

  Modifier(){
    this.router.navigate(['modifier-plant'])
  }

  Ajouter() {
    this.router.navigate(['ajouter-plant'])  
  }

}
