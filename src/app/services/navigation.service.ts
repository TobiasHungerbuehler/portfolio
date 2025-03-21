import { Injectable } from "@angular/core";
import { NavigationLink } from "../interfaces/navigation-interface.";

@Injectable({
    providedIn: "root",
})
export class NavigationService {
    constructor() {}

    links: NavigationLink[] = [
        { id: "aboutMe", text: { DE: "Über mich", EN: "About Me" } },
        { id: "mySkills", text: { DE: "Skills", EN: "Skills" } },
        { id: "portfolio", text: { DE: "Portfolio", EN: "Portfolio" } },
        { id: "contact", text: { DE: "Kontakt", EN: "Contact" } },
    ];

    getLinks(): NavigationLink[] {
        return this.links;
    }
}
