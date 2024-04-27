
// base.component.ts
import { Component } from '@angular/core';
import { StartSectionComponent } from '../start-section/start-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { ScrollStateService } from '../services/scroll-state.service';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [StartSectionComponent,
            AboutMeComponent,
            MySkillsComponent,
            PortfolioComponent,
            ContactComponent,
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  constructor(private scrollService: ScrollStateService) {}
  
  handleScroll(sectionId: string) {
    this.scrollService.changeSection(sectionId);
  }

}
