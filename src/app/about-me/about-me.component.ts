// about-me.component.ts
import { Component, EventEmitter, Output, HostListener, ViewChild, ElementRef, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
  @Output() onScroll = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkVisibility() {
    const componentPosition = this.el.nativeElement.getBoundingClientRect();
    const componentTop = componentPosition.top;
    const componentBottom = componentPosition.bottom;

    // Prüft, ob die Komponente im Viewport ist
    const isVisible = (componentTop < window.innerHeight) && (componentBottom >= 0);

    if (isVisible) {
      this.onScroll.emit('aboutMe');
    }
  }


}


  // id = 'aboutMe'; // Angenommen, die Section hat die ID "about-me"

  // constructor(private elementRef: ElementRef) {}

  // ngOnInit() {
  //   this.addScrollListener();
  // }

  // addScrollListener() {
  //   window.addEventListener('scroll', this.onWindowScroll, true);
  // }

  // onWindowScroll = (): void => {
  //   const rect = this.elementRef.nativeElement.getBoundingClientRect();
  //   const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
  //   if (isInViewport) {
  //     console.log(`Section "${this.id}" im sichtbaren Bereich: ${Date.now()}`);
  //     this.onScroll.emit(this.id);
  //   }
  // }

  // ngOnDestroy() {
  //   window.removeEventListener('scroll', this.onWindowScroll, true);
  // }

  // @HostBinding('id')
  // get elementId() {
  //   return this.id;
  // }
