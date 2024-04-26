import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-start-section',
  standalone: true,
  imports: [],
  templateUrl: './start-section.component.html',
  styleUrl: './start-section.component.scss'
})
export class StartSectionComponent {
  constructor() {
    this.updateVH();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.updateVH();
  }

  private updateVH() {
    // Setzt die CSS-Variable --vh auf der Root-Ebene (document.documentElement)
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
