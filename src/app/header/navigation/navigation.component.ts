import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { ScrollStateService } from "../../services/scroll-state.service";
import { NavigationLink } from "../../interfaces/navigation-interface.";
import { Subscription } from "rxjs";
import { CommonModule } from "@angular/common";
import { ScrollToService } from "../../services/scroll-to.service";
import { LanguageService } from "../../services/language.service";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";

/**
 * NavigationComponent renders a navigation bar with links that scroll
 * to sections on the page or navigate to the home route before scrolling.
 * It also highlights the active section and supports mobile menu toggling.
 *
 * @example
 * <app-navigation [links]="navLinks" [isMobileMenu]="true" (closeMenu)="onClose()"></app-navigation>
 */
@Component({
    selector: "app-navigation",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./navigation.component.html",
    styleUrl: "./navigation.component.scss",
})
export class NavigationComponent implements OnInit, OnDestroy {
    /** Array of navigation links with ID and translated text */
    @Input() links: NavigationLink[] = [];
    /** Flag indicating if mobile menu overlay is open */
    @Input() isMobileMenu = false;
    /** Emits event to close the mobile menu overlay */
    @Output() closeMenu = new EventEmitter<void>();

    /** Currently active section ID for highlighting */
    activeSection = "";
    private subscription!: Subscription;

    /** Current language code, e.g., 'EN' or 'DE' */
    currentLanguage: "EN" | "DE" = "EN";
    private languageSubscription!: Subscription;

    /**
     * Constructor with injected services.
     *
     * @param scrollService - Service emitting section visibility changes.
     * @param scrollToService - Service to scroll to specific sections.
     * @param languageService - Service providing current language state.
     * @param router - Angular Router for navigation.
     */
    constructor(private scrollService: ScrollStateService, private scrollToService: ScrollToService, private languageService: LanguageService, private router: Router) {}

    /**
     * Initialize component: subscribe to scroll state and language changes.
     */
    ngOnInit(): void {
        this.subscribeToSectionChanges();
        this.currentLanguage = this.languageService.getCurrentLanguage() as "EN" | "DE";
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language as "EN" | "DE";
        });
    }

    /**
     * Subscribes to scroll service to track and update the active section.
     */
    subscribeToSectionChanges(): void {
        this.subscription = this.scrollService.currentSection.subscribe((section) => {
            this.activeSection = section;
        });
    }

    /**
     * Clean up subscriptions to prevent memory leaks.
     */
    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
    }

    /**
     * Closes mobile menu overlay if in mobile mode.
     */
    closeOverlay(): void {
        if (this.isMobileMenu) {
            this.closeMenu.emit();
        }
    }

    /**
     * Scrolls to the given section ID using the scrollToService,
     * then closes the overlay if open.
     *
     * @param event - Click event to prevent default anchor behavior.
     * @param sectionId - ID of the target section element.
     */
    scrollToId(event: Event, sectionId: string): void {
        event.preventDefault();
        this.scrollToService.scrollToSection(sectionId);
        this.closeOverlay();
    }

    /**
     * Handles click on navigation link: prevents default, navigates
     * to root if necessary, and scrolls to the fragment ID.
     *
     * @param fragment - Target fragment ID without '#'.
     * @param event - Mouse event from anchor click.
     */
    onLinkClick(fragment: string, event: MouseEvent): void {
        event.preventDefault();
        this.handleNavigation(fragment);
    }

    /**
     * Navigates to root route or stays if already on root, then
     * scrolls to the fragment ID.
     *
     * @param fragment - Target fragment ID without '#'.
     */
    private handleNavigation(fragment: string): void {
        if (this.router.url !== "/") {
            this.router.navigate(["/"], { fragment }).then(() => this.scrollToFragment(fragment));
        } else {
            this.scrollToFragment(fragment);
        }
    }

    /**
     * Calculates offset position and smoothly scrolls to the element.
     *
     * @param fragment - Target fragment ID without '#'.
     */
    private scrollToFragment(fragment: string): void {
        const el = document.getElementById(fragment);
        if (!el) {
            return;
        }
        const headerOffset = 180; // Height of fixed header + margin
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
}
