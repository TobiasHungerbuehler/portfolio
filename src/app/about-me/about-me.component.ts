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

  constructor(private ementRef: ElementRef, private scrollService: ScrollStateService) {}
  @HostListener('window:scroll')
  checkVisibility() {
    const rect = this.ementRef.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      this.scrollService.changeSection('aboutMe');
      console.log('change');
      
    }
  }

}


