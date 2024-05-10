// about-me.component.ts
import { Component,HostListener, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { TextContainerComponent } from './text-container/text-container.component';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TextContainerComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent {

  // @ViewChild('portraitWrapper') portraitWrapper!: ElementRef<HTMLImageElement>;
  // @ViewChild('waveWraper') waveWrapper!: ElementRef<HTMLImageElement>;
  // @ViewChild('aboutMe') aboutMe!: ElementRef<HTMLElement>;

  // ngAfterViewInit() {
  //   // Warte bis die View initialisiert wurde, um Zugriff auf die DOM-Elemente zu haben
  //   const portraitHeight = this.portraitWrapper.nativeElement.offsetHeight;
  //   const waveHeight = this.waveWrapper.nativeElement.offsetHeight;

    
  //   this.aboutMe.nativeElement.style.height = `${portraitHeight + waveHeight}px`;
  // }


  // Konstruktor der Komponente, der Abhängigkeiten injiziert.
  constructor(private elementRef: ElementRef, // Injectiert eine Referenz auf das DOM-Element der Komponente.
              private scrollService: ScrollStateService) // Injectiert den Service, der für die Scroll-Überwachung zuständig ist.
  {}

  // Dekorator, der eine Methode als Event-Handler für das native scroll Event des Fensters registriert.
  @HostListener('window:scroll') // Horcht auf das Scroll-Event des Fensters.

  onScroll() {
    // Wird jedes Mal aufgerufen, wenn auf der Seite gescrollt wird.
    this.scrollService.checkAndEmitVisibility(this.elementRef, 'aboutMe'); 
    // Ruft eine Methode im scrollService auf, die prüft, ob das Element sichtbar ist, und einen Zustand entsprechend ändert.
  }
}


