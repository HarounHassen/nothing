import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  textAreaLabel: string = '';
  isEmailEmpty: boolean = false;
  textArea: string = '';


  isEmpty() {
    if(!this.textArea){
      this.textAreaLabel = "Veuillez entrer votre idée" ;
      this.isEmailEmpty = true ;
    } 
    }

}