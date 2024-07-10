import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure-segment',
  templateUrl: './structure-segment.component.html',
  styleUrl: './structure-segment.component.css'
})
export class StructureSegmentComponent {

  constructor(private router : Router){

  }

  Modifier() {
    this.router.navigate(['modifier-segment']);
  }
  Ajouter() {
    this.router.navigate(['ajouter-segment']);
  }

}
