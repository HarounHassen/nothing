import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSiteComponent } from './modifier-site.component';

describe('ModifierSiteComponent', () => {
  let component: ModifierSiteComponent;
  let fixture: ComponentFixture<ModifierSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
