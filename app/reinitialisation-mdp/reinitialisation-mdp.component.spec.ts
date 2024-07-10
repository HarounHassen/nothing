import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialisationMdpComponent } from './reinitialisation-mdp.component';

describe('ReinitialisationMdpComponent', () => {
  let component: ReinitialisationMdpComponent;
  let fixture: ComponentFixture<ReinitialisationMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReinitialisationMdpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReinitialisationMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
