import { Injectable } from "@angular/core";
import { Texts, LanguageText, SectionTexts } from "../interfaces/texts.interface";

@Injectable({
    providedIn: "root",
})
export class TextService {
    private texts: Texts = {
        aboutMe: {
            title: {
                en: "About me",
                de: "Über mich",
            },
            text1: {
                en: "Hi, I’m Tobias – a web developer from St. Gallen. What do I enjoy most? Automating and digitizing processes. Thanks to my background in energy technology and sales, I build software that really works in practice. With my open nature, I listen carefully to what matters to you and together we find the best way forward.",
                de: "Hallo, ich bin Tobias – Web-Entwickler aus St. Gallen. Was mir besonders Spaß macht? Prozesse zu automatisieren und zu digitalisieren. Mit meiner Erfahrung in der Energietechnik und im Vertrieb entwickle ich Software, die in der Praxis wirklich funktioniert. Dank meiner offenen Art höre ich genau zu, was Ihnen wichtig ist, und finde gemeinsam mit Ihnen den besten Weg.",
            },
            text2: {
                en: "I began programming to simplify business operations. It wasn’t long before I discovered a passion for modern web technologies that turn complicated processes into everyday advantages.",
                de: "Ich habe mit der Programmierung angefangen, um Geschäftsabläufe einfacher zu machen. Dabei entdeckte ich schnell meine Begeisterung für moderne Webtechnologien, die es ermöglichen, komplizierte Abläufe so zu gestalten, dass sie im Alltag einen echten Unterschied machen.",
            },
            text3: {
                en: "While working on exciting projects, I continually improve my skills—especially in modern backend technologies. This keeps me up-to-date and allows me to develop systems that perfectly meet my clients’ needs. For me, it means tackling complex challenges with straightforward, practical solutions.",
                de: "Während ich an spannenden Projekten arbeite, bilde ich mich ständig weiter – besonders im Bereich moderner Backend-Technologien. So bleibe ich immer auf dem neuesten Stand und kann Systeme entwickeln, die genau zu den Anforderungen meiner Kunden passen. Für mich heißt das, komplexe Herausforderungen mit einfachen, praxisnahen Lösungen anzugehen.",
            },
        },
        mySkills: {
            text1: {
                en: "I have expanded my web development skills, enabling me to create various real projects.",
                de: "Ich habe meine Fähigkeiten in der Webentwicklung ausgebaut, die es mir ermöglicht haben, verschiedene reale Projekte zu erstellen.",
            },
        },
        portfolio: {
            text1: {
                en: "Discover a diverse range of projects, from practical tools to creative experiments, and see my skills in action",
                de: "Entdecken Sie eine vielfältige Auswahl an Projekten – von praktischen Anwendungen bis zu kreativen Experimenten – und erleben Sie meine Fähigkeiten in Aktion.",
            },
        },
        contact: {
            text1: {
                en: "Got an idea or a problem to solve?",
                de: "Haben Sie eine Idee oder ein Problem zu lösen?",
            },
            text2: {
                en: "Contact me through this form. I’m eager to hear from you, learn about your ideas, and help bring your projects to life – whether it’s a custom website with unique features or a full-scale webshop.</br></br>Need a web developer? <b>Contact me!</b>",
                de: "Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen – sei es eine Webseite mit individuellen Funktionen oder ein kompletter Webshop.</br></br>Benötigen Sie einen Webentwickler? <b>Kontaktieren Sie mich!</b>",
            },
        },
    };

    constructor() {}

    getText(section: keyof Texts, key: keyof SectionTexts): LanguageText {
        const sectionTexts = this.texts[section];
        const text = sectionTexts[key];
        if (!text) {
            return { en: "", de: "" }; // Fallback
        }
        return text;
    }
}
