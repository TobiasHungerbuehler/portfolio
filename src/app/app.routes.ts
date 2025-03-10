// app.routes.ts
import { Routes } from "@angular/router";
import { BaseComponent } from "./base/base.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { PrivacyComponent } from "./privacy/privacy.component";

export const routes: Routes = [
    { path: "", component: BaseComponent },
    { path: "impressum", component: ImpressumComponent },
    { path: "privacy", component: PrivacyComponent },
];
