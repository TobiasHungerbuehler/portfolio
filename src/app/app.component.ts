import { Component, OnInit, AfterViewChecked } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

// AOS als Modul importieren
import AOS from "aos";
import "aos/dist/aos.css";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewChecked {
    title = "portfolio";

    ngOnInit(): void {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }

    ngAfterViewChecked(): void {
        AOS.refresh();
    }
}
