export interface LanguageText {
    en: string;
    de: string;
}

export interface SectionTexts {
    title?: LanguageText;
    text1: LanguageText;
    text2?: LanguageText;
    text3?: LanguageText;
}

export interface Texts {
    aboutMe: SectionTexts;
    mySkills: SectionTexts;
    portfolio: SectionTexts;
    contact: SectionTexts;
    privacy: SectionTexts;
    impressum: SectionTexts;
}
