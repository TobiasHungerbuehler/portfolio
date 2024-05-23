/**
 * Represents the HeaderComponent managing the navigation bar.
 */
import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationLink } from '../interfaces/navigation-interface.';
import { NavigationService } from '../services/navigation.service';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: NavigationLink[] = [];
  
  @ViewChild('mobileMenuComponent', { static: false }) 
  private mobileMenu!: MobileMenuComponent;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.links = this.navigationService.getLinks();
  }

  toggleMenu() {
    this.mobileMenu.toggle();
  }
}

  

    
  

