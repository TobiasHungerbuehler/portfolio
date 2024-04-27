// about-me.component.ts
import { Component, EventEmitter, Output, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
  handleVisibility(isVisible: any) {  // Verwende `any` vorübergehend zur Fehlersuche
    console.log('Received event:', isVisible);  // Logge den empfangenen Wert
    console.log('Type of received event:', typeof isVisible);  // Logge den Typ des empfangenen Wertes

    if (typeof isVisible === 'boolean') {
      console.log('About Me visibility:', isVisible);
    } else {
      console.error('Unexpected event type');
    }
  }

}

