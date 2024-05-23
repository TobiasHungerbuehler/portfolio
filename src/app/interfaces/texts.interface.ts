export interface Texts {
    EN: LanguageTexts;
    DE: LanguageTexts;
  }
  
  export interface LanguageTexts {
    aboutMe: SectionTexts;
    mySkills: SectionTexts;
  }
  
  export interface SectionTexts {
    text1: string;
    text2?: string;
    text3?: string;
  }
  