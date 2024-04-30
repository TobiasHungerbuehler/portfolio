/**
 * Represents the HeaderComponent managing the navigation bar.
 */
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
export class HeaderComponent implements OnInit {
  
  /**
   * A reference to the mobile menu component for toggling visibility.
   */
  @ViewChild('mobileMenuComponent', { static: false }) 
  private mobileMenu!: MobileMenuComponent;

  /**
   * The currently active section of the page, used to highlight the menu item.
   */
  activeSection = '';

  /**
   * Subscription to manage the observable subscription lifecycle.
   */
  private subscription!: Subscription;

  constructor(private scrollService: ScrollStateService) {}

  /**
   * Subscribes to section changes to update the active section in the header.
   */
  ngOnInit() {
    this.subscribeToSectionChanges();
  }

  /**
   * Subscribes to the scroll state service to receive updates about the current section.
   */
  subscribeToSectionChanges() {
    this.subscription = this.scrollService.currentSection.subscribe(section => {
      this.activeSection = section;
    });
  }

  /**
   * Unsubscribes from the scroll state service when the component is destroyed.
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Toggles the visibility of the mobile menu.
   */
  toggleMenu() {
    this.mobileMenu.toggle();
  }
}

  

    
  

