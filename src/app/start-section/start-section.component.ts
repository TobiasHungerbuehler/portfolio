import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { LinkBoxComponent } from "../shared/link-box/link-box.component";

/**
 * StartSectionComponent represents the landing section of the website.
 * It displays background images, titles, a call-to-action button, a link box, and a scroll box.
 * When the section becomes visible, the scroll box animates its position from bottom 300px to bottom 100px.
 *
 * @example
 * <app-start-section></app-start-section>
 */

@Component({
    selector: "app-start-section",
    standalone: true,
    imports: [CommonModule, LinkBoxComponent],
    templateUrl: "./start-section.component.html",
    styleUrl: "./start-section.component.scss",
})
export class StartSectionComponent {}
