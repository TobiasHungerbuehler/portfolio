import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOverlayVisible: boolean = false;

  toggleOverlay(): void {
    this.isOverlayVisible = !this.isOverlayVisible;
  }

  closeOverlay(): void {
    this.isOverlayVisible = false;
  }
}
