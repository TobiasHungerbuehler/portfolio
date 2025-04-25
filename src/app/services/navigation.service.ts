import { Injectable } from "@angular/core";
import { NavigationLink } from "../interfaces/navigation-interface.";

/**
 * Service for providing navigation links for the application.
 *
 * @example
 * const links = navigationService.getLinks();
 */
@Injectable({
    providedIn: "root",
})
export class NavigationService {
    /**
     * Array of navigation links.
     *
     * Each link contains an identifier and a text object with translations.
     */
    links: NavigationLink[] = [
        { route: "/", id: "aboutMe", text: { DE: "Über mich", EN: "About Me" } },
        { route: "/", id: "mySkills", text: { DE: "Skills", EN: "Skills" } },
        { route: "/", id: "portfolio", text: { DE: "Portfolio", EN: "Portfolio" } },
        { route: "/", id: "contact", text: { DE: "Kontakt", EN: "Contact" } },
    ];

    constructor() {}

    /**
     * Retrieves the navigation links.
     *
     * @returns {NavigationLink[]} An array of navigation links.
     */
    getLinks(): NavigationLink[] {
        return this.links;
    }
}
