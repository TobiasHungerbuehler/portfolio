import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Text } from '@angular/compiler';
import { Texts, LanguageTexts, SectionTexts  } from '../interfaces/texts.interface';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

    // Initialisiere das BehaviorSubject mit dem Standardwert 'EN'
    private currentLanguage = new BehaviorSubject<string>('EN');
  
    // Exponiere das Observable für die Abonnenten
    currentLanguage$ = this.currentLanguage.asObservable();
  
    // Definiere die Texte für verschiedene Sprachen
    private texts: Texts = {
      EN: {
        aboutMe: {
          text1: "Hi, I'm Tobias, a front-end developer based in St. Gallen, Switzerland, who thrives on solving problems and digitalizing business processes. With a robust background in technical and sales environments, I bring a unique perspective to digital development, combining analytical problem-solving with a communicative approach to deliver straightforward solutions.",
          text2: "My programming journey began with a quest to enhance business operations, quickly evolving into a passion for leveraging web technologies to simplify complex processes and innovate digital interactions.",
          text3: "I develop user-friendly interfaces and robust backend systems to solve problems and improve workflows. I'm actively expanding my backend skills to tackle complex challenges more effectively."
        },
        mySkills: {
          text1: "I have grown my frontend developments skills that have allowed me to create different real projects."
        }
      },
      DE: {
        aboutMe: {
          text1: "Hallo, ich bin Tobias, ein Front-End-Entwickler aus St. Gallen, Schweiz, der es liebt, Probleme zu lösen und Geschäftsprozesse zu digitalisieren. Mit einem soliden Hintergrund in technischen und Vertriebsumgebungen bringe ich eine einzigartige Perspektive in die digitale Entwicklung ein, indem ich analytisches Problemlösen mit einem kommunikativen Ansatz kombiniere, um einfache Lösungen zu liefern.",
          text2: "Meine Programmierreise begann mit dem Bestreben, Geschäftsabläufe zu verbessern, und entwickelte sich schnell zu einer Leidenschaft dafür, Webtechnologien zu nutzen, um komplexe Prozesse zu vereinfachen und digitale Interaktionen zu innovieren.",
          text3: "Ich entwickle benutzerfreundliche Schnittstellen und robuste Backend-Systeme, um Probleme zu lösen und Arbeitsabläufe zu verbessern. Ich erweitere aktiv meine Backend-Fähigkeiten, um komplexe Herausforderungen effektiver zu bewältigen."
        },
        mySkills: {
          text1: "Ich habe meine Frontend-Entwicklungsfähigkeiten ausgebaut, die es mir ermöglicht haben, verschiedene reale Projekte zu erstellen."
        }
      }
    };
    
  
    // Methode, um den Text basierend auf dem Schlüssel und der aktuellen Sprache abzurufen
    getText(section: keyof LanguageTexts, key: keyof SectionTexts): string {
      const language = this.currentLanguage.value as keyof Texts;
      return this.texts[language][section][key] as string;
    }
  
    // Methode, um die Sprache zu ändern
    setLanguage(language: string) {
      this.currentLanguage.next(language); // Aktualisieren des BehaviorSubject
    }

    // gibt anderen services wie portfolioProjects die ausgewählte sprache zurück
    getCurrentLanguage(): string {
      return this.currentLanguage.value;
    }
}
