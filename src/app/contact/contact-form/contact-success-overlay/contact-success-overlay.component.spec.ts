import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuccessOverlayComponent } from './contact-success-overlay.component';

describe('ContactSuccessOverlayComponent', () => {
  let component: ContactSuccessOverlayComponent;
  let fixture: ComponentFixture<ContactSuccessOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSuccessOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSuccessOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
