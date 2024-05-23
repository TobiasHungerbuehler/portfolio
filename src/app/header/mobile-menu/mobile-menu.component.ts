/**
 * Component that handles the mobile navigation menu.
 * This component listens to changes in the active section of the page to highlight the corresponding menu item.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollStateService } from '../../services/scroll-state.service';
import { Subscription } from 'rxjs';
import { NavigationLink } from '../../interfaces/navigation-interface.';
import { NavigationComponent } from '../navigation/navigation.component';
import { NavigationService } from '../../services/navigation.service';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {

  isVisible = false;
  links: NavigationLink[] = [];
  private subscription!: Subscription;
  currentLanguage = 'EN';

  constructor(private navigationService: NavigationService, private textService: TextService) {

        // Abonniere die aktuelle Sprache, um Änderungen zu überwachen
        this.textService.currentLanguage$.subscribe(lang => {
          this.currentLanguage = lang;
        });
  }

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

    // Methode, um die Sprache zu setzen
    setLanguage(language: string) {
      this.textService.setLanguage(language);
    }
}
