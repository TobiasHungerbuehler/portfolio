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
import { LanguageService } from '../../services/language.service';

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

  constructor(private navigationService: NavigationService, private textService: TextService, private languageService: LanguageService) {

    // Abonniere die aktuelle Sprache, um Änderungen zu überwachen
    this.languageService.currentLanguage$.subscribe(lang => {
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
    console.log('mobile menu close()');
    
  }

  // Methode, um die Sprache zu setzen
  setLanguage(language: string) {
    this.languageService.setCurrentLanguage(language);
    this.close();
  }
}
