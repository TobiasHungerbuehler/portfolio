import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { ScrollStateService } from "../../services/scroll-state.service";
import { NavigationLink } from "../../interfaces/navigation-interface.";
import { Subscription } from "rxjs";
import { CommonModule } from "@angular/common";
import { ScrollToService } from "../../services/scroll-to.service";
import { LanguageService } from "../../services/language.service";

@Component({
    selector: "app-navigation",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./navigation.component.html",
    styleUrl: "./navigation.component.scss",
})
export class NavigationComponent {
    @Input() links: NavigationLink[] = [];
    @Input() isMobileMenu = false;
    @Output() closeMenu = new EventEmitter<void>();

    activeSection = "";
    private subscription!: Subscription;

    currentLanguage: "EN" | "DE" = "EN";
    private languageSubscription!: Subscription;

    constructor(private scrollService: ScrollStateService, private scrollToService: ScrollToService, private languageService: LanguageService) {}

    ngOnInit() {
        this.subscribeToSectionChanges();
        this.currentLanguage = this.languageService.getCurrentLanguage() as "EN" | "DE";

        // Abonniere das BehaviorSubject, um die aktuelle Sprache zu überwachen
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language as "EN" | "DE";
        });
    }

    subscribeToSectionChanges() {
        this.subscription = this.scrollService.currentSection.subscribe((section) => {
            this.activeSection = section;
            console.log(this.activeSection);
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    closeOverlay() {
        if (this.isMobileMenu) {
            this.closeMenu.emit();
        }
    }

    scrollToId(event: Event, sectionId: string): void {
        event.preventDefault();
        this.scrollToService.scrollToSection(sectionId);
        this.closeOverlay();
    }
}
