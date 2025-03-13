import { Component, HostListener, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { ScrollStateService } from "../services/scroll-state.service";
import { CommonModule } from "@angular/common";
import { LanguageService } from "../services/language.service";
import { Subscription } from "rxjs";
import { FormsModule } from "@angular/forms";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { TextService } from "../services/text.service";

/**
 * Component for the Contact section which includes an animated line effect.
 * The component listens to window scroll events and updates its active state
 * based on the visibility of the section.
 *
 * @example
 * <app-contact></app-contact>
 */
@Component({
    selector: "app-contact",
    standalone: true,
    imports: [CommonModule, FormsModule, ContactFormComponent],
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit, OnDestroy {
    /** Current language code (e.g., "EN" or "DE") */
    currentLanguage: string = "EN";
    /** Flag indicating whether the contact section is active (visible) */
    active: boolean = false;
    /** Subscription for language changes */
    private languageSubscription!: Subscription;
    /** Subscription for scroll state changes */
    private scrollSubscription!: Subscription;

    /**
     * Constructor with dependency injection.
     *
     * @param elementRef - Reference to the component's DOM element.
     * @param scrollService - Service that monitors scroll events and section visibility.
     * @param languageService - Service providing the current language.
     * @param textService - Service providing localized text content.
     */
    constructor(private elementRef: ElementRef, private scrollService: ScrollStateService, private languageService: LanguageService, private textService: TextService) {}

    /**
     * Lifecycle hook called after data-bound properties are initialized.
     * Subscribes to language and scroll state changes.
     */
    ngOnInit(): void {
        // Subscribe to language changes.
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });

        // Subscribe to scroll state changes to update the "active" flag.
        this.scrollSubscription = this.scrollService.currentSection.subscribe((sectionId) => {
            this.active = sectionId === "contact";
        });
    }

    /**
     * Host listener for the window scroll event.
     * Calls the scroll service to check and emit the visibility status of this section.
     */
    @HostListener("window:scroll")
    onScroll(): void {
        this.scrollService.checkAndEmitVisibility(this.elementRef, "contact");
    }

    /**
     * Retrieves localized text from the TextService.
     *
     * @param section - The section for which to retrieve text.
     * @param key - The specific key within the section.
     * @returns The localized text based on the current language.
     */
    getText(section: keyof (typeof this.textService)["texts"], key: keyof (typeof this.textService)["texts"][typeof section]): string {
        const text = this.textService.getText(section, key);
        return this.currentLanguage === "EN" ? text.en : text.de;
    }

    /**
     * Lifecycle hook called when the component is destroyed.
     * Unsubscribes from subscriptions to prevent memory leaks.
     */
    ngOnDestroy(): void {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }
}
