import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { LanguageService } from "../services/language.service";
import { TextService } from "../services/text.service";

/**
 * Component for the Impressum section which renders
 * the legal imprint in the current language.
 *
 * @example
 * <app-impressum></app-impressum>
 */
@Component({
    selector: "app-impressum",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./impressum.component.html",
    styleUrls: ["./impressum.component.scss"],
})
export class ImpressumComponent implements OnInit, OnDestroy {
    /** Current language code (e.g., "EN" or "DE") */
    currentLanguage: string = "EN";
    /** Subscription for language changes */
    private languageSubscription!: Subscription;

    /**
     * Constructor with dependency injection.
     *
     * @param languageService - Service providing the current language.
     * @param textService - Service providing localized text content.
     */
    constructor(private languageService: LanguageService, private textService: TextService) {}

    /**
     * Lifecycle hook called after data-bound properties are initialized.
     * Subscribes to language changes.
     */
    ngOnInit(): void {
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((lang) => {
            this.currentLanguage = lang;
        });
    }

    /**
     * Retrieves localized text from the TextService.
     *
     * @param section - The section for which to retrieve text.
     * @param key - The specific key within the section.
     * @returns The localized text (HTML string) based on the current language.
     */
    getText(section: keyof (typeof this.textService)["texts"], key: keyof (typeof this.textService)["texts"][typeof section]): string {
        const text = this.textService.getText(section, key);
        return this.currentLanguage === "EN" ? text.en : text.de;
    }

    /**
     * Lifecycle hook called when the component is destroyed.
     * Unsubscribes from the language subscription to prevent memory leaks.
     */
    ngOnDestroy(): void {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
    }
}
