import { Component, HostListener, ElementRef, OnInit } from "@angular/core";
import { ScrollStateService } from "../services/scroll-state.service";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LanguageService } from "../services/language.service";
import { Subscription } from "rxjs";

@HostListener("window:scroll")
@Component({
    selector: "app-contact",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    contactForm!: FormGroup;
    submitted = false;
    currentLanguage: string = "EN";
    private languageSubscription!: Subscription;

    messageData = {
        name: "",
        email: "",
        message: "",
    };

    constructor(private elementRef: ElementRef, private scrollService: ScrollStateService, private fb: FormBuilder, private languageService: LanguageService) {}

    onScroll() {
        this.scrollService.checkAndEmitVisibility(this.elementRef, "contact");
    }

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            message: ["", Validators.required],
        });

        // Initialer Text basierend auf der aktuellen Sprache
        //this.currentLanguage = this.languageService.getCurrentLanguage();

        // Abonniere das BehaviorSubject, um die aktuelle Sprache zu überwachen
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });
        console.log(this.currentLanguage);
    }

    onSubmit(): void {
        this.submitted = true;
        if (this.contactForm.invalid) {
            return;
        }
        console.log("Form submitted:", this.contactForm.value);
    }
}
