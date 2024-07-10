import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurePlantComponent } from './structure-plant.component';

describe('StructurePlantComponent', () => {
  let component: StructurePlantComponent;
  let fixture: ComponentFixture<StructurePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructurePlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructurePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
