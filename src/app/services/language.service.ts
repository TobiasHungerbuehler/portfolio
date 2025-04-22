import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/**
 * Service for managing the application's language with persistence.
 *
 * Saves the selected language to localStorage under key 'appLanguage'.
 * On initialization, loads the stored language or falls back to default 'DE'.
 */
@Injectable({
    providedIn: "root",
})
export class LanguageService {
    private storageKey = "appLanguage";

    /**
     * BehaviorSubject holding the current language code.
     * Initialized from localStorage or defaults to 'DE'.
     */
    private currentLanguageSubject: BehaviorSubject<string>;

    /**
     * Observable stream of the current language.
     */
    public currentLanguage$;

    constructor() {
        const saved = localStorage.getItem(this.storageKey);
        const defaultLang = saved ? saved : "DE";
        this.currentLanguageSubject = new BehaviorSubject<string>(defaultLang);
        this.currentLanguage$ = this.currentLanguageSubject.asObservable();
    }

    /**
     * Retrieves the current language.
     * @returns {string} The current language code.
     */
    getCurrentLanguage(): string {
        return this.currentLanguageSubject.value;
    }

    /**
     * Updates the current language and persists it to localStorage.
     * @param language - The new language code.
     */
    setCurrentLanguage(language: string) {
        localStorage.setItem(this.storageKey, language);
        this.currentLanguageSubject.next(language);
    }
}
