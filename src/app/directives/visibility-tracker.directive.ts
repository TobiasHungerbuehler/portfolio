// visibility-tracker.directive.ts
import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appVisibilityTracker]'
})
export class VisibilityTrackerDirective {
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    console.log('Checking visibility:', isVisible); // Zum Debuggen hinzugefügt
    this.visibilityChange.emit(isVisible);
  }
}
