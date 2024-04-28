import { Component,HostListener, ElementRef} from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  // Konstruktor der Komponente, der Abhängigkeiten injiziert.
  constructor(private elementRef: ElementRef, // Injectiert eine Referenz auf das DOM-Element der Komponente.
  private scrollService: ScrollStateService) // Injectiert den Service, der für die Scroll-Überwachung zuständig ist.
{}

  // Dekorator, der eine Methode als Event-Handler für das native scroll Event des Fensters registriert.
  @HostListener('window:scroll') // Horcht auf das Scroll-Event des Fensters.

  onScroll() {
  // Wird jedes Mal aufgerufen, wenn auf der Seite gescrollt wird.
  this.scrollService.checkAndEmitVisibility(this.elementRef, 'portfolio'); 
  // Ruft eine Methode im scrollService auf, die prüft, ob das Element sichtbar ist, und einen Zustand entsprechend ändert.
  }
}
