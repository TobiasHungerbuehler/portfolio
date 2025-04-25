import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { LanguageService } from "../services/language.service";
import { TextService } from "../services/text.service";

/**
 * Component for the Privacy section which renders the privacy policy
 * in the current language and updates on language changes.
 *
 * @example
 * <app-privacy></app-privacy>
 */
@Component({
    selector: "app-privacy",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./privacy.component.html",
    styleUrls: ["./privacy.component.scss"],
})
export class PrivacyComponent implements OnInit, OnDestroy {
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
    constructor(private languageService: LanguageService, private textService: TextService) {}

    /**
     * Lifecycle hook called after data-bound properties are initialized.
     * Subscribes to language
     */
    ngOnInit(): void {
        // Subscribe to language changes.
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });
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
    }
}
