import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureSegmentComponent } from './structure-segment.component';

describe('StructureSegmentComponent', () => {
  let component: StructureSegmentComponent;
  let fixture: ComponentFixture<StructureSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureSegmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
