import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSegmentComponent } from './ajouter-segment.component';

describe('AjouterSegmentComponent', () => {
  let component: AjouterSegmentComponent;
  let fixture: ComponentFixture<AjouterSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterSegmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
