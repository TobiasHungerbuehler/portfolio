import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { CommonModule } from '@angular/common';
import { TextService } from '../services/text.service';
import { Subscription } from 'rxjs';
import { PortfolioProjectsService } from '../services/portfolio-projects.service';
import { Project } from '../interfaces/portfolioProjects.interface';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})


export class PortfolioComponent {
  // Konstruktor der Komponente, der Abhängigkeiten injiziert.
  constructor(private elementRef: ElementRef, // Injectiert eine Referenz auf das DOM-Element der Komponente.
    private scrollService: ScrollStateService, // Injectiert den Service, der für die Scroll-Überwachung zuständig ist.
    private textService: TextService,
    private portfolioService: PortfolioProjectsService
  ) { }

  projects: Project [] = [];
  currentLanguage: string = "";
  private languageSubscription!: Subscription;
  
  ngOnInit() {
    // Abonniere das BehaviorSubject, um die aktuelle Sprache zu überwachen
    this.languageSubscription = this.textService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });

    this.projects = this.portfolioService.getProjects();
    
  }









  ///// Scroll FX

  // Dekorator, der eine Methode als Event-Handler für das native scroll Event des Fensters registriert.
  @HostListener('window:scroll') // Horcht auf das Scroll-Event des Fensters.

  onScroll() {
    // Wird jedes Mal aufgerufen, wenn auf der Seite gescrollt wird.
    this.scrollService.checkAndEmitVisibility(this.elementRef, 'portfolio');
    // Ruft eine Methode im scrollService auf, die prüft, ob das Element sichtbar ist, und einen Zustand entsprechend ändert.
  }
}
