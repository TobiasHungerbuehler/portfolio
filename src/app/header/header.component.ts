import { Component, ViewChild, OnInit } from '@angular/core';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { CommonModule } from '@angular/common';
import { ScrollStateService } from '../services/scroll-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileMenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  
  @ViewChild('mobileMenuComponent', { static: false }) mobileMenu!: MobileMenuComponent; // Referenz auf die Child-Komponente
  
  private subscription!: Subscription; // Typ korrekt verwenden
  activeSection = '';

  constructor(private scrollService: ScrollStateService) {}

  ngOnInit() {
    this.subscribeToSectionChanges();
  }

  subscribeToSectionChanges() {
    this.subscription = this.scrollService.currentSection.subscribe(section => {
      this.activeSection = section;
      console.log(this.activeSection);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

    toggleMenu() {
      this.mobileMenu.toggle();
    }



  

    
  
}
