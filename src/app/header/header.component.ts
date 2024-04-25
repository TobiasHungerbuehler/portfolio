import { Component, ViewChild } from '@angular/core';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('mobileMenuComponent', { static: false }) mobileMenu!: MobileMenuComponent; // Referenz auf die Child-Komponente

  toggleMenu() {
      this.mobileMenu.toggle();
    } 
  
}
