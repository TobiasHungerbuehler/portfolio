import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { CommonModule } from '@angular/common';
import { TextService } from '../services/text.service';
import { Subscription } from 'rxjs';
import { PortfolioProjectsService } from '../services/portfolio-projects.service';
import { Project } from '../interfaces/portfolioProjects.interface';
import { LanguageService } from '../services/language.service';
import { Texts, LanguageText, SectionTexts } from '../interfaces/texts.interface';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})


export class PortfolioComponent {

  projects: Project[] = [];
  currentLanguage: string = "";
  private languageSubscription!: Subscription;


  constructor(private elementRef: ElementRef, // Injectiert eine Referenz auf das DOM-Element der Komponente.
    private scrollService: ScrollStateService, // Injectiert den Service, der für die Scroll-Überwachung zuständig ist.
    private languageService: LanguageService,
    private portfolioService: PortfolioProjectsService,
    private textService: TextService
  ) { }



  ngOnInit() {
    // Abonniere das BehaviorSubject, um die aktuelle Sprache zu überwachen
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });

    // Hole Projekte aus dem service
    this.projects = this.portfolioService.getProjects();

  }

  //hole text aus textservice
  getText(section: keyof Texts, key: keyof SectionTexts): string {
    const text = this.textService.getText(section, key);
    return this.currentLanguage === 'EN' ? text.en : text.de;
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
