import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { LinkBoxComponent } from "../shared/link-box/link-box.component";

@Component({
    selector: "app-start-section",
    standalone: true,
    imports: [CommonModule, LinkBoxComponent],
    templateUrl: "./start-section.component.html",
    styleUrl: "./start-section.component.scss",
})
export class StartSectionComponent {}
