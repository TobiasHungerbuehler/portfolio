/**
 * Component that handles the mobile navigation menu.
 * This component listens to changes in the active section of the page to highlight the corresponding menu item.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { Subscription } from 'rxjs';
import { NavigationLink } from '../interfaces/navigation-interface.';
import { NavigationComponent } from '../header/navigation/navigation.component';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  isVisible = false;
  links: NavigationLink[] = [];
  private subscription!: Subscription;

  constructor(
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.links = this.navigationService.getLinks();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  close(): void {
    this.isVisible = false;
  }
}
