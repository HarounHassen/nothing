import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSegmentComponent } from './modifier-segment.component';

describe('ModifierSegmentComponent', () => {
  let component: ModifierSegmentComponent;
  let fixture: ComponentFixture<ModifierSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierSegmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
