import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  activeSection: string = '';
  private subscription!: Subscription;

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
