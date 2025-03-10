import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class LanguageService {
    private currentLanguageSubject = new BehaviorSubject<string>("DE");
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    getCurrentLanguage(): string {
        return this.currentLanguageSubject.value;
    }

    setCurrentLanguage(language: string) {
        this.currentLanguageSubject.next(language);
    }
}
