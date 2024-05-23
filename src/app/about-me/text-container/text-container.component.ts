import { Component } from '@angular/core';
import { TextService } from '../../services/text.service';
import { CommonModule } from '@angular/common';
import { Texts, LanguageTexts, SectionTexts } from '../../interfaces/texts.interface';

@Component({
  selector: 'app-text-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-container.component.html',
  styleUrl: './text-container.component.scss'
})
export class TextContainerComponent {

  constructor(private textService: TextService) {}

  text1: string = '';
  text2: string = '';
  text3: string = '';

  ngOnInit(): void {
    this.updateTexts();
    this.textService.currentLanguage$.subscribe(() => {
      this.updateTexts();
    });
  }

  updateTexts(): void {
    const keys: (keyof SectionTexts)[] = ['text1', 'text2', 'text3'];
    for (let i = 0; i < keys.length; i++) {
      this[keys[i]] = this.textService.getText('aboutMe', keys[i]);
    }
  }

}
