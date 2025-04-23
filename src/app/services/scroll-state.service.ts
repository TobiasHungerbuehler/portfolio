import { Injectable, ElementRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/**
 * A service to manage the scroll state of the application.
 * It provides functionality to track the visibility of sections within the viewport
 * and emits changes to the current active section.
 */
@Injectable({
    providedIn: "root", // Specifies that this service should be created by the root application injector.
})
export class ScrollStateService {
    /**
     * A BehaviorSubject that holds the current active section ID.
     * BehaviorSubject keeps the latest value cached and emits it to new subscribers.
     */
    private sectionSource = new BehaviorSubject<string>("");

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
    checkAndEmitVisibility(elementRef: ElementRef, sectionId: string): void {
        const rect = elementRef.nativeElement.getBoundingClientRect();

        // Vertical center of the viewport
        const viewportMiddle = window.innerHeight / 2;
        // Vertical center of the element
        const elementMiddle = (rect.top + rect.bottom) / 2;

        // If the element's middle is above and below the viewport middle
        const isCentered = elementMiddle >= 0 && elementMiddle <= window.innerHeight;

        // Or, stricter: crosses the viewport middle line
        const crossesMiddle = rect.top < viewportMiddle && rect.bottom > viewportMiddle;

        if (crossesMiddle) {
            this.sectionSource.next(sectionId);
        }
    }
}
