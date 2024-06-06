/**
 * Represents the HeaderComponent managing the navigation bar.
 */
import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationLink } from '../interfaces/navigation-interface.';
import { NavigationService } from '../services/navigation.service';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { TextService } from '../services/text.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: NavigationLink[] = [];

  currentLanguage = 'EN';
  
  @ViewChild('mobileMenuComponent', { static: false }) 
  private mobileMenu!: MobileMenuComponent;

  constructor(private navigationService: NavigationService, private textService: TextService, private languageService: LanguageService) {
        // Abonniere die aktuelle Sprache, um Änderungen zu überwachen
        this.languageService.currentLanguage$.subscribe(lang => {
          this.currentLanguage = lang;
        });
  }

    // Methode, um die Sprache zu setzen
    setLanguage(language: string) {
      this.languageService.setCurrentLanguage(language);
      console.log('setCurrentLanguage', language);
      
    }

  ngOnInit() {
    this.links = this.navigationService.getLinks();
  }

  toggleMenu() {
    this.mobileMenu.toggle();
  }

  // closeMenu() {
  //   this.mobileMenu.close();
  // }
}

  

    
  

