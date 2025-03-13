import { Component, HostListener, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { ScrollStateService } from "../services/scroll-state.service";
import { TextContainerComponent } from "./text-container/text-container.component";
import { Subscription } from "rxjs";

/**
 * AboutMeComponent displays the "About Me" section with text and portrait images.
 * When the section becomes visible on scroll, the background portrait image rotates 180°.
 *
 * @example
 * <app-about-me></app-about-me>
 */
@Component({
    selector: "app-about-me",
    standalone: true,
    imports: [TextContainerComponent],
    templateUrl: "./about-me.component.html",
    styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit, OnDestroy {
    /** Flag indicating whether the About Me section is active (visible) */
    active: boolean = false;
    /** Subscription for scroll state changes */
    private scrollSubscription!: Subscription;

    /**
     * Constructor with dependency injection.
     * @param elementRef - Reference to the component's DOM element.
     * @param scrollService - Service that monitors scroll events and section visibility.
     */
    constructor(private elementRef: ElementRef, private scrollService: ScrollStateService) {}

    /**
     * Host listener for the window scroll event.
     * Checks if the About Me section is visible.
     */
    @HostListener("window:scroll")
    onScroll(): void {
        this.scrollService.checkAndEmitVisibility(this.elementRef, "aboutMe");
    }

    /**
     * Lifecycle hook called after component initialization.
     * Subscribes to the scroll state changes to update the "active" flag.
     */
    ngOnInit(): void {
        this.scrollSubscription = this.scrollService.currentSection.subscribe((sectionId: string) => {
            this.active = sectionId === "aboutMe";
        });
    }

    /**
     * Lifecycle hook called when the component is destroyed.
     * Unsubscribes from the scroll state to prevent memory leaks.
     */
    ngOnDestroy(): void {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }
}
