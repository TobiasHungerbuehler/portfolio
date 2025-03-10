import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LinkBoxComponent } from "../shared/link-box/link-box.component";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [CommonModule, LinkBoxComponent],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss",
})
export class FooterComponent {}
