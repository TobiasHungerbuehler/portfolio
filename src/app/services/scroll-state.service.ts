import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * A service to manage the scroll state of the application.
 * It provides functionality to track the visibility of sections within the viewport
 * and emits changes to the current active section.
 */
@Injectable({
  providedIn: 'root' // Specifies that this service should be created by the root application injector.
})
export class ScrollStateService {
  /**
   * A BehaviorSubject that holds the current active section ID.
   * BehaviorSubject keeps the latest value cached and emits it to new subscribers.
   */
  private sectionSource = new BehaviorSubject<string>('');

  /**
   * An Observable derived from the sectionSource BehaviorSubject.
   * Components can subscribe to this Observable to get updates about the current active section.
   */
  currentSection = this.sectionSource.asObservable();

  /**
   * Checks if the given element is visible in the viewport and emits the section ID if it is.
   * @param element The ElementRef of the component to check for visibility.
   * @param sectionId The ID of the section to potentially mark as active.
   */
  checkAndEmitVisibility(element: ElementRef, sectionId: string) {
    // Gets the element's current position relative to the viewport
    const rect = element.nativeElement.getBoundingClientRect();
    
    // Determines if the top of the element is below the top of the viewport and
    // the bottom of the element is above the bottom of the viewport
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // If the element is visible, emit its section ID as the current active section
    if (isVisible) {
      this.sectionSource.next(sectionId);
    }
  }
}
