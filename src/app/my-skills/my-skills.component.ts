import { Component, HostListener, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { ScrollStateService } from "../services/scroll-state.service";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { TextService } from "../services/text.service";
import { LanguageService } from "../services/language.service";
import { SkillsService } from "../services/skills.service";
import { Skill, SkillGroup } from "../interfaces/skills.interface";
import { SingleSkillComponent } from "./single-skill/single-skill.component";

/**
 * MySkillsComponent displays the skills section with skill groups and an animated title.
 * When the section becomes visible on scroll, the h2 title letters animate (flash blue briefly).
 *
 * @example
 * <app-my-skills></app-my-skills>
 */
@Component({
    selector: "app-my-skills",
    standalone: true,
    imports: [CommonModule, SingleSkillComponent],
    templateUrl: "./my-skills.component.html",
    styleUrls: ["./my-skills.component.scss"],
})
export class MySkillsComponent implements OnInit, OnDestroy {
    /** Current language code (e.g. 'EN' or 'DE') */
    currentLanguage: string = "EN";
    /** Flag indicating whether the skills section is active (visible) */
    active: boolean = false;
    /** Array of all skills */
    skills: Skill[] = [];
    /** Array of skill groups */
    skillGroups: SkillGroup[] = [];
    /** Subscription for language changes */
    private languageSubscription!: Subscription;
    /** Subscription for scroll state changes */
    private scrollSubscription!: Subscription;

    /**
     * Constructor with dependency injection.
     *
     * @param elementRef - Reference to the component's DOM element.
     * @param scrollService - Service that monitors scroll events and section visibility.
     * @param textService - Service that provides localized text content.
     * @param languageService - Service that provides the current language.
     * @param skillsService - Service that provides the skills data.
     */
    constructor(private elementRef: ElementRef, private scrollService: ScrollStateService, private textService: TextService, private languageService: LanguageService, private skillsService: SkillsService) {}

    /**
     * Host listener for the window scroll event.
     * Checks the visibility of the skills section.
     */
    @HostListener("window:scroll")
    onScroll() {
        this.scrollService.checkAndEmitVisibility(this.elementRef, "mySkills");
    }

    /**
     * Lifecycle hook called after component initialization.
     * Subscribes to language and scroll state changes, and initializes skills.
     */
    ngOnInit() {
        // Initial language setting
        this.currentLanguage = this.languageService.getCurrentLanguage();

        // Subscribe to language changes
        this.languageSubscription = this.languageService.currentLanguage$.subscribe((language) => {
            this.currentLanguage = language;
        });

        // Subscribe to scroll state changes to update the active flag
        this.scrollSubscription = this.scrollService.currentSection.subscribe((sectionId: string) => {
            this.active = sectionId === "mySkills";
        });

        // Initialize skills and group them
        this.skills = this.skillsService.getSkills();
        this.renderGroupSkills();
    }

    /**
     * Groups the skills into skillGroups based on predefined group sizes.
     */
    renderGroupSkills() {
        const groupSizes = [4, 3, 2, 1];
        let index = 0;
        for (const size of groupSizes) {
            this.skillGroups.push({ skills: this.skills.slice(index, index + size) });
            index += size;
        }
    }

    /**
     * Retrieves localized text from the TextService.
     *
     * @param section - The section for which to retrieve text.
     * @param key - The specific key within the section.
     * @returns The localized text string based on the current language.
     */
    getText(section: keyof (typeof this.textService)["texts"], key: keyof (typeof this.textService)["texts"][typeof section]): string {
        const text = this.textService.getText(section, key);
        return this.currentLanguage === "EN" ? text.en : text.de;
    }

    /**
     * Lifecycle hook called when the component is destroyed.
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
