import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  isVisible: boolean = false;

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  close(): void {
    this.isVisible = false;
  }
}
