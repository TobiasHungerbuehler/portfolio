export interface LanguageText {
  en: string;
  de: string;
}

export interface SectionTexts {
  text1: LanguageText;
  text2?: LanguageText;
  text3?: LanguageText;
}

export interface Texts {
  aboutMe: SectionTexts;
  mySkills: SectionTexts;
}
