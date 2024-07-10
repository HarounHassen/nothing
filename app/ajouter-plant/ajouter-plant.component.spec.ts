import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlantComponent } from './ajouter-plant.component';

describe('AjouterPlantComponent', () => {
  let component: AjouterPlantComponent;
  let fixture: ComponentFixture<AjouterPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
