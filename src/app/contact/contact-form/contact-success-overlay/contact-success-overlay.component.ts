import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * ContactSuccessOverlayComponent displays a full-screen overlay message after a successful form submission.
 * The displayed message and close button text adapt based on the provided language ("EN" or "DE").
 *
 * @example
 * <app-contact-success-overlay [currentLanguage]="'EN'" (closed)="onOverlayClosed()"></app-contact-success-overlay>
 */

@Component({
    selector: "app-contact-success-overlay",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./contact-success-overlay.component.html",
    styleUrl: "./contact-success-overlay.component.scss",
})
export class ContactSuccessOverlayComponent {
    /**
     * Current language code ("EN" or "DE").
     */
    @Input() currentLanguage: string = "EN";

    /**
     * Event emitted when the overlay is closed.
     */
    @Output() closed: EventEmitter<void> = new EventEmitter<void>();

    /**
     * Returns the success message based on the current language.
     */
    get message(): string {
        return this.currentLanguage === "EN" ? "Thank you for your message. I will get back to you as soon as possible." : "Danke für ihre Nachricht. Ich melde mich schnellstmöglich.";
    }

    /**
     * Returns the close button text based on the current language.
     */
    get closeButtonText(): string {
        return this.currentLanguage === "EN" ? "Close" : "Schliessen";
    }

    /**
     * Handles the close button click event and emits the "closed" event.
     */
    onClose(): void {
        this.closed.emit();
    }
}
