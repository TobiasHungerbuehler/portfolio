import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @ViewChild('mobileMenuComponent', { static: false }) mobileMenu!: MobileMenuComponent; // Referenz auf die Child-Komponente


  private observer!: IntersectionObserver;

    toggleMenu() {
      this.mobileMenu.toggle();
    }



  

    
  
}
