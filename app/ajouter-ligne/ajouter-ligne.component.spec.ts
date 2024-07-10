import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLigneComponent } from './ajouter-ligne.component';

describe('AjouterLigneComponent', () => {
  let component: AjouterLigneComponent;
  let fixture: ComponentFixture<AjouterLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterLigneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
