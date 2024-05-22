/**
 * Component that handles the mobile navigation menu.
 * This component listens to changes in the active section of the page to highlight the corresponding menu item.
 */
import { Component, OnInit, OnDestroy, input } from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../services/navigation.service';
import { NavigationLink } from '../interfaces/navigation-link.model';



@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit, OnDestroy {

  /**
   * Subscription to manage cleanup of the Observable subscription.
   */
  private subscription!: Subscription;

  /**
   * Injects the ScrollStateService to listen for changes in the active section.
   * @param scrollService The service to subscribe to for active section changes.
   */
  constructor(private scrollService: ScrollStateService, private navigation: NavigationService) { }

  links: NavigationLink[] = [];

  /**
   * Indicates whether the mobile menu is visible or not.
   */
  isVisible: boolean = false;

  /**
   * Stores the identifier of the currently active section.
   */
  activeSection: string = '';


  /**
   * Subscribes to the section changes on initialization to update the active section state.
   */
  ngOnInit() {
    this.subscribeToSectionChanges();
    this.links = this.navigation.getLinks();
  }

  /**
   * Creates a subscription to the ScrollStateService to listen for changes in the active section.
   * This allows the menu to update its active state based on scroll position.
   */
  subscribeToSectionChanges() {
    this.subscription = this.scrollService.currentSection.subscribe(section => {
      this.activeSection = section;
    });
  }

  /**
   * Unsubscribes from the active section subscription when the component is destroyed to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Toggles the visibility of the mobile menu.
   */
  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  /**
   * Closes the mobile menu.
   */
  close(): void {
    this.isVisible = false;
  }
}
