import { Component, HostListener, ElementRef, OnInit, inject } from "@angular/core";
import { ScrollStateService } from "../services/scroll-state.service";
import { CommonModule } from "@angular/common";
import { LanguageService } from "../services/language.service";
import { Subscription } from "rxjs";
import { FormsModule, NgForm } from "@angular/forms";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { TextService } from "../services/text.service";

@HostListener("window:scroll")
@Component({
    selector: "app-contact",
    standalone: true,
    imports: [CommonModule, FormsModule, ContactFormComponent],
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    currentLanguage: string = "EN";
    private languageSubscription!: Subscription;

    constructor(private elementRef: ElementRef, private scrollService: ScrollStateService, private languageService: LanguageService, private textService: TextService) {}

    onScroll() {
        this.scrollService.checkAndEmitVisibility(this.elementRef, "contact");
    }

    ngOnInit(): void {
        // Abonniere die Sprache
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });
    }

    getText(section: keyof (typeof this.textService)["texts"], key: keyof (typeof this.textService)["texts"][typeof section]): string {
        const text = this.textService.getText(section, key);
        return this.currentLanguage === "EN" ? text.en : text.de;
    }
}
