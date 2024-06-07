import { Component, HostListener, ElementRef } from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TextService } from '../services/text.service';
import { LanguageService } from '../services/language.service';
import { SkillsService } from '../services/skills.service';
import { Skill, SkillGroup } from '../interfaces/skills.interface';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  currentLanguage: string = 'EN';
  private languageSubscription!: Subscription;

  constructor(
    private elementRef: ElementRef,
    private scrollService: ScrollStateService,
    private textService: TextService,
    private languageService: LanguageService,
    private skillsService: SkillsService,
  ) { }

  @HostListener('window:scroll') // Horcht auf das Scroll-Event des Fensters.

  onScroll() { // Wird jedes Mal aufgerufen, wenn auf der Seite gescrollt wird.
    this.scrollService.checkAndEmitVisibility(this.elementRef, 'mySkills'); // Ruft eine Methode im scrollService auf, die prüft, ob das Element sichtbar ist, und einen Zustand entsprechend ändert.
  }


  skills: Skill[] = [];
  skillGroups: SkillGroup[] = [];

  ngOnInit() {

    // Initialer Text basierend auf der aktuellen Sprache
    this.currentLanguage = this.languageService.getCurrentLanguage();

    // Abonniere das BehaviorSubject, um die aktuelle Sprache zu überwachen
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });

    // Initialisiere die Skills und gruppiere sie
    this.skills = this.skillsService.getSkills();

    this.renderGroupSkills();



  }

  renderGroupSkills() {
    const groupSizes = [4, 3, 2, 1];
    let index = 0;

    for (const size of groupSizes) {
      this.skillGroups.push({ skills: this.skills.slice(index, index + size) });
      index += size;
    }
  }


  ngOnDestroy() {
    // Unsubscribe, um Speicherlecks zu vermeiden
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  getText(section: keyof typeof this.textService['texts'], key: keyof typeof this.textService['texts'][typeof section]): string {
    const text = this.textService.getText(section, key);
    return this.currentLanguage === 'EN' ? text.en : text.de;
  }






}

