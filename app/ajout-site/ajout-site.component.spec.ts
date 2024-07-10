import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSiteComponent } from './ajout-site.component';

describe('AjoutSiteComponent', () => {
  let component: AjoutSiteComponent;
  let fixture: ComponentFixture<AjoutSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
