import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPlantComponent } from './modifier-plant.component';

describe('ModifierPlantComponent', () => {
  let component: ModifierPlantComponent;
  let fixture: ComponentFixture<ModifierPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
