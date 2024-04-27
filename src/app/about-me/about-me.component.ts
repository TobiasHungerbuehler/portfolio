// about-me.component.ts
import { Component, EventEmitter, Output, HostListener, ElementRef} from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

// Definiert die Klasse AboutMeComponent.
export class AboutMeComponent {

  // Deklariert ein Output-Event, das den Namen des sichtbaren Abschnitts emittieren kann.
  @Output() onScroll = new EventEmitter<string>();

  // Der Konstruktor injiziert die Referenz auf das Element dieser Komponente (ElementRef) 
  // und eine Instanz des ScrollStateService für die Zustandsverwaltung.
  constructor(private el: ElementRef, private scrollStateService: ScrollStateService) {}

  // Ein Event-Listener, der auf das Scroll-Event des Fensters hört.
  @HostListener('window:scroll', ['$event'])
  checkVisibility() {
    // Ruft die Position des Elements relativ zum Viewport ab.
    const componentPosition = this.el.nativeElement.getBoundingClientRect();
    
    // Speichert die obere Position des Elements relativ zum Viewport.
    const componentTop = componentPosition.top;
    
    // Speichert die untere Position des Elements relativ zum Viewport.
    const componentBottom = componentPosition.bottom;

    // Prüft, ob das Element sichtbar ist, indem es überprüft, ob der obere Rand
    // des Elements unterhalb der unteren Grenze des Fensters und der untere Rand
    // des Elements oberhalb der oberen Grenze des Fensters liegt.
    const isVisible = (componentTop < window.innerHeight) && (componentBottom >= 0);

    // Wenn das Element sichtbar ist, wird das 'onScroll' Event mit dem String 'aboutMe' ausgelöst.
    // Das könnte genutzt werden, um anderen Komponenten oder Services mitzuteilen,
    // dass das 'About Me'-Element aktuell sichtbar ist.
    if (isVisible) {
      this.onScroll.emit('aboutMe');
    }
  }
}


