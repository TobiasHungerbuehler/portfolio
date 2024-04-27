
// base.component.ts
import { Component } from '@angular/core';
import { StartSectionComponent } from '../start-section/start-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [StartSectionComponent,
            AboutMeComponent,
            MySkillsComponent,
            PortfolioComponent,
            ContactComponent
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  
  handleScroll(sectionId: string) {
    console.log('Scrolled to section:', sectionId);
    // Füge hier deine Logik hinzu, um etwas zu tun, wenn gescrollt wird
  }

}
