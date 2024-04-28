// scroll-state.service.ts
import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScrollStateService {
  private sectionSource = new BehaviorSubject<string>('');

  currentSection = this.sectionSource.asObservable();

  checkAndEmitVisibility(element: ElementRef, sectionId: string) {
    const rect = element.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      this.sectionSource.next(sectionId);
    }
  }
}