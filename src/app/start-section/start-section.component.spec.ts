import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSectionComponent } from './start-section.component';

describe('StartSectionComponent', () => {
  let component: StartSectionComponent;
  let fixture: ComponentFixture<StartSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
