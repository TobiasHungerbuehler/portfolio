import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ScrollStateService } from '../../services/scroll-state.service';
import { NavigationLink } from '../../interfaces/navigation-interface.';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ScrollToService } from '../../services/scroll-to.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Input() links: NavigationLink[] = [];
  @Input() isMobileMenu = false;
  @Output() closeMenu = new EventEmitter<void>();

  activeSection = '';
  private subscription!: Subscription;

  constructor(private scrollService: ScrollStateService, private scrollToService: ScrollToService) { }

  ngOnInit() {
    this.subscribeToSectionChanges();
  }

  subscribeToSectionChanges() {
    this.subscription = this.scrollService.currentSection.subscribe(section => {
      this.activeSection = section;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeOverlay() {
    if (this.isMobileMenu) {
      this.closeMenu.emit();
    }
  }

  scrollToId(event: Event, sectionId: string): void {
    event.preventDefault();
    this.scrollToService.scrollToSection(sectionId);
    this.closeOverlay();
  }
}


