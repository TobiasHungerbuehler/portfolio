import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { LanguageService } from "../../services/language.service";
import { Subscription } from "rxjs";
import { RouterModule } from "@angular/router";
import { ContactSuccessOverlayComponent } from "./contact-success-overlay/contact-success-overlay.component";

/**
 * ContactFormComponent handles the contact form submission.
 * After a successful submission, it displays a full-screen overlay message.
 *
 * @example
 * <app-contact-form></app-contact-form>
 */

@Component({
    selector: "app-contact-form",
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, ContactSuccessOverlayComponent],
    templateUrl: "./contact-form.component.html",
    styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
    currentLanguage: string = "EN";
    private languageSubscription!: Subscription;

    /** Flag indicating if the success overlay is visible */
    successMessageVisible: boolean = false;

    /** Model for the template-driven form */
    contactForm = {
        name: "",
        email: "",
        message: "",
    };

    /** Privacy Policy acceptance status */
    privacyAccepted: boolean = false;
    privacyError: boolean = false;

    /** Injected HttpClient instance */
    http = inject(HttpClient);

    post = {
        endPoint: "https://thtech.ch/sendMail.php",
        body: (payload: any) => JSON.stringify(payload),
        options: {
            headers: {
                "Content-Type": "text/plain",
                responseType: "text",
            },
        },
    };

    constructor(private languageService: LanguageService) {}

    ngOnInit(): void {
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((lang) => {
            this.currentLanguage = lang;
        });
    }

    /**
     * Toggles the privacy acceptance status.
     */
    togglePrivacy(): void {
        this.privacyAccepted = !this.privacyAccepted;
        if (this.privacyAccepted) {
            this.privacyError = false;
        }
    }

    /**
     * Handles form submission.
     * Delegates validation and submission processing to dedicated methods.
     * @param ngForm - The Angular NgForm representing the contact form.
     */
    onSubmit(ngForm: NgForm): void {
        if (!this.validateForm(ngForm)) {
            return;
        }
        this.processSubmission(ngForm);
    }

    /**
     * Validates the form and privacy acceptance.
     * @param ngForm - The Angular NgForm representing the contact form.
     * @returns True if the privacy is accepted and the form is valid, false otherwise.
     */
    private validateForm(ngForm: NgForm): boolean {
        if (!(this.privacyAccepted && ngForm.form.valid)) {
            this.privacyError = !this.privacyAccepted;
            return false;
        }
        return true;
    }

    /**
     * Processes the form submission by sending a HTTP POST request.
     * Resets the form upon successful submission.
     * @param ngForm - The Angular NgForm representing the contact form.
     */
    private processSubmission(ngForm: NgForm): void {
        if (ngForm.submitted && ngForm.form.valid) {
            this.http.post(this.post.endPoint, this.post.body(this.contactForm)).subscribe({
                next: (response) => {
                    ngForm.resetForm();
                    this.privacyAccepted = false;
                    // Show the success overlay after successful submission
                    this.successMessageVisible = true;
                    console.log(this.successMessageVisible);
                },
                error: (error) => console.error(error),
                complete: () => console.info("Send post complete"),
            });
        }
    }

    /**
     * Closes the success overlay.
     */
    closeOverlay(): void {
        this.successMessageVisible = false;
    }

    ngOnDestroy(): void {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
    }
}
