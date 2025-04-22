import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/**
 * Service for managing the application's language.
 *
 * Provides methods to get and set the current language, as well as an observable
 * for other components to subscribe to language changes.
 *
 * @example
 * languageService.setCurrentLanguage("EN");
 * const currentLang = languageService.getCurrentLanguage();
 */
@Injectable({
    providedIn: "root",
})
export class LanguageService {
    /**
     * BehaviorSubject holding the current language code.
     * Default is "DE".
     */
    private currentLanguageSubject = new BehaviorSubject<string>("DE");

    /**
     * Observable stream of the current language.
     */
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    /**
     * Retrieves the current language.
     *
     * @returns {string} The current language code.
     */
    getCurrentLanguage(): string {
        console.log("language");
        return this.currentLanguageSubject.value;
    }

    /**
     * Updates the current language.
     *
     * @param language - The new language code.
     */
    setCurrentLanguage(language: string) {
        this.currentLanguageSubject.next(language);
    }
}
