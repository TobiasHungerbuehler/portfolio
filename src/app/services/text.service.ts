import { Injectable } from "@angular/core";
import { Texts, LanguageText, SectionTexts } from "../interfaces/texts.interface";

@Injectable({
    providedIn: "root",
})
export class TextService {
    private texts: Texts = {
        aboutMe: {
            text1: {
                en: "Hi, I'm Tobias, a front-end developer based in St. Gallen, Switzerland, who thrives on solving problems and digitalizing business processes. With a robust background in technical and sales environments, I bring a unique perspective to digital development, combining analytical problem-solving with a communicative approach to deliver straightforward solutions.",
                de: "Hallo, ich bin Tobias, ein Front-End-Entwickler aus St. Gallen, Schweiz, der es liebt, Probleme zu lösen und Geschäftsprozesse zu digitalisieren. Mit einem soliden Hintergrund in technischen und Vertriebsumgebungen bringe ich eine einzigartige Perspektive in die digitale Entwicklung ein, indem ich analytisches Problemlösen mit einem kommunikativen Ansatz kombiniere, um einfache Lösungen zu liefern.",
            },
            text2: {
                en: "My programming journey began with a quest to enhance business operations, quickly evolving into a passion for leveraging web technologies to simplify complex processes and innovate digital interactions.",
                de: "Meine Programmierreise begann mit dem Bestreben, Geschäftsabläufe zu verbessern, und entwickelte sich schnell zu einer Leidenschaft dafür, Webtechnologien zu nutzen, um komplexe Prozesse zu vereinfachen und digitale Interaktionen zu innovieren.",
            },
            text3: {
                en: "I develop user-friendly interfaces and robust backend systems to solve problems and improve workflows. I'm actively expanding my backend skills to tackle complex challenges more effectively.",
                de: "Ich entwickle benutzerfreundliche Schnittstellen und robuste Backend-Systeme, um Probleme zu lösen und Arbeitsabläufe zu verbessern. Ich erweitere aktiv meine Backend-Fähigkeiten, um komplexe Herausforderungen effektiver zu bewältigen.",
            },
        },
        mySkills: {
            text1: {
                en: "I have grown my frontend developments skills that have allowed me to create different real projects.",
                de: "Ich habe meine Frontend-Entwicklungsfähigkeiten ausgebaut, die es mir ermöglicht haben, verschiedene reale Projekte zu erstellen.",
            },
        },
        portfolio: {
            text1: {
                en: "Explore a selection of my work here - Interact with projects to see my skills in action.",
                de: "Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.",
            },
        },
        contact: {
            text1: {
                en: "Got a problem to solve?",
                de: "Haben Sie ein Problem zu lösen?",
            },
            text2: {
                en: "Contact me through this form. I am interested in hearing from you, learning your ideas, and contributing to your projects with my work.</br></br> Need a Frontend developer? <b>Contact me!</b>",
                de: "Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.</br></br> Benötigen Sie einen Frontend-Entwickler? <b>Kontaktieren Sie mich!</b>",
            },
        },
    };

    constructor() {}

    getText(section: keyof Texts, key: keyof SectionTexts): LanguageText {
        const sectionTexts = this.texts[section];
        const text = sectionTexts[key];
        if (!text) {
            // Fallback-Wert, falls der Schlüssel nicht existiert
            return { en: "", de: "" };
        }
        return text;
    }
}
