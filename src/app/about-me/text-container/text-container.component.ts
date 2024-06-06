import { Component } from '@angular/core';
import { TextService } from '../../services/text.service';
import { CommonModule } from '@angular/common';
import { Texts, LanguageText, SectionTexts } from '../../interfaces/texts.interface';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-text-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-container.component.html',
  styleUrl: './text-container.component.scss'
})
export class TextContainerComponent {

  currentLanguage: string = 'EN';
  private languageSubscription!: Subscription;

  constructor(private textService: TextService, private languageService: LanguageService) { }

  ngOnInit() {
    // Initialer Text basierend auf der aktuellen Sprache
    this.currentLanguage = this.languageService.getCurrentLanguage();

    // Abonniere das BehaviorSubject, um die aktuelle Sprache zu überwachen
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
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
