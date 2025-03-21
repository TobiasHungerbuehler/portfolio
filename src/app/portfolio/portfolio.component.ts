import { Component, HostListener, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ScrollStateService } from "../services/scroll-state.service";
import { CommonModule } from "@angular/common";
import { TextService } from "../services/text.service";
import { Subscription } from "rxjs";
import { PortfolioProjectsService } from "../services/portfolio-projects.service";
import { Project } from "../interfaces/portfolioProjects.interface";
import { LanguageService } from "../services/language.service";
import { Texts, SectionTexts } from "../interfaces/texts.interface";

/**
 * PortfolioComponent displays a portfolio section with projects and animations.
 *
 * It subscribes to language changes and scroll events. When the portfolio section becomes
 * visible in the viewport, an animation (e.g. expanding line) can be triggered.
 *
 * @example
 * <app-portfolio></app-portfolio>
 */
@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent implements OnInit, OnDestroy {
    /** Array of portfolio projects retrieved from the service */
    projects: Project[] = [];
    /** Current language code (e.g. "EN" or "DE") */
    currentLanguage: string = "";
    /** Flag indicating whether the portfolio section is active (visible) */
    active: boolean = false;
    /** Subscription for language changes */
    private languageSubscription!: Subscription;
    /** Subscription for scroll state changes */
    private scrollSubscription!: Subscription;

    /**
     * Constructor injects the necessary services and ElementRef.
     *
     * @param elementRef - Reference to the component's native DOM element.
     * @param scrollService - Service that monitors scroll events and section visibility.
     * @param languageService - Service that provides the current language.
     * @param portfolioService - Service that provides portfolio project data.
     * @param textService - Service that provides localized text content.
     */
    constructor(private elementRef: ElementRef, private scrollService: ScrollStateService, private languageService: LanguageService, private portfolioService: PortfolioProjectsService, private textService: TextService) {}

    /**
     * Lifecycle hook called after data-bound properties are initialized.
     *
     * Subscribes to language updates and scroll state changes.
     * Retrieves portfolio projects from the service.
     */
    ngOnInit() {
        // Subscribe to language changes
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });

        // Subscribe to scroll state changes; set active flag when section is visible
        this.scrollSubscription = this.scrollService.currentSection.subscribe((sectionId) => {
            this.active = sectionId === "portfolio";
        });

        // Retrieve portfolio projects from the service
        this.projects = this.portfolioService.getProjects();
    }

    /**
     * Retrieves localized text from the TextService.
     *
     * @param section - The section key for which to retrieve the text.
     * @param key - The specific text key within the section.
     * @returns The localized text string based on the current language.
     */
    getText(section: keyof Texts, key: keyof SectionTexts): string {
        const text = this.textService.getText(section, key);
        return this.currentLanguage === "EN" ? text.en : text.de;
    }

    /**
     * Host listener for the window scroll event.
     *
     * Calls the scrollService to check and emit the visibility status of this section.
     */
    @HostListener("window:scroll")
    onScroll() {
        this.scrollService.checkAndEmitVisibility(this.elementRef, "portfolio");
    }

    /**
     * Lifecycle hook called when the component is destroyed.
     *
     * Unsubscribes from all subscriptions to prevent memory leaks.
     */
    ngOnDestroy() {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }
}
