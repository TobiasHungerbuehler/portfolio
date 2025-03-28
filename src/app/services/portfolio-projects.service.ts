import { Injectable } from "@angular/core";
import { Project } from "../interfaces/portfolioProjects.interface";
import { LanguageService } from "./language.service";

@Injectable({
    providedIn: "root",
})
export class PortfolioProjectsService {
    constructor() {}

    private projects: Project[] = [
        {
            name: "Swiss Climate Watch",
            technologies: ["Angular", "Firebase", "API"],
            description: {
                en: "On an interactive map, current temperatures from Swiss weather stations are displayed. I compare these readings with historical averages from 1940 to 1970, revealing local variations.",
                de: "Auf einer interaktiven Karte werden aktuelle Temperaturen von Schweizer Messstationen visualisiert. Die erfassten Werte vergleiche ich mit historischen Durchschnittsdaten aus den Jahren 1940 bis 1970 – so werden örtliche Unterschiede sichtbar.",
            },

            demoLink: "https://swissclimatewatch.thtech.ch",
            githubLink: "https://github.com/TobiasHungerbuehler/swiss-climate-watch",
            img: "./assets/img/portfolio/scw.png",
        },
        {
            name: "Join",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: {
                en: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
                de: "Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
            },
            demoLink: "https://join.thtech.ch",
            githubLink: "https://github.com/TobiasHungerbuehler/Join",
            img: "./assets/img/portfolio/join.png",
        },
        {
            name: "El Pollo Loco",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: {
                en: "A simple Jump-and-run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the killer chicken.",
                de: "Ein 2D Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Salsa-Flaschen zu finden, um gegen das Killerhuhn zu kämpfen.",
            },
            demoLink: "https://elpolloloco.thtech.ch",
            githubLink: "https://github.com/TobiasHungerbuehler/el_pollo_loco",
            img: "./assets/img/portfolio/elpolloloco.png",
        },
        {
            name: "Pokédex",
            technologies: ["JavaScript", "HTML", "CSS", "API"],
            description: {
                en: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
                de: "Basierend auf der PokéAPI, einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.",
            },
            demoLink: "https://pokedex.thtech.ch",
            githubLink: "https://github.com/TobiasHungerbuehler/pokedex",
            img: "./assets/img/portfolio/pokedex.png",
        },
    ];

    getProjects() {
        return this.projects;
    }
}
