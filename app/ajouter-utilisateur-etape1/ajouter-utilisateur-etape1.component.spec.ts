import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUtilisateurEtape1Component } from './ajouter-utilisateur-etape1.component';

describe('AjouterUtilisateurEtape1Component', () => {
  let component: AjouterUtilisateurEtape1Component;
  let fixture: ComponentFixture<AjouterUtilisateurEtape1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterUtilisateurEtape1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterUtilisateurEtape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
