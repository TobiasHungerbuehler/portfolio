import { Injectable } from '@angular/core';
import { Project } from '../interfaces/portfolioProjects.interface';


@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectsService {

  
  constructor() { }
  
  private projects: Project[] = [
    {
      name: "EL Pollo Loco",
      technologies: ["JavaScript", "HTML"],
      description: {
        en: "A simple Jump and Run game based on object-oriented approach",
        de: "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz"
      },
      demoLink: "",
      githubLink: ""
    },
    {
      name: "Weather App",
      technologies: ["JavaScript", "HTML", "CSS"],
      description: {
        en: "An application that shows the current weather and forecast using a weather API.",
        de: "Eine Anwendung, die das aktuelle Wetter und die Vorhersage mithilfe einer Wetter-API anzeigt."
      },
      demoLink: "https://example.com/weather-app",
      githubLink: "https://github.com/username/weather-app"
    },
    {
      name: "Portfolio Website",
      technologies: ["Angular", "TypeScript", "SCSS"],
      description: {
        en: "A personal portfolio website to showcase my projects and skills.",
        de: "Eine persönliche Portfolio-Website, um meine Projekte und Fähigkeiten zu präsentieren."
      },
      demoLink: "https://example.com/portfolio",
      githubLink: "https://github.com/username/portfolio"
    },
    {
      name: "To-Do List App",
      technologies: ["React", "JavaScript", "CSS"],
      description: {
        en: "A simple To-Do list application with CRUD functionality.",
        de: "Eine einfache To-Do-Listen-Anwendung mit CRUD-Funktionalität."
      },
      demoLink: "https://example.com/todo-app",
      githubLink: "https://github.com/username/todo-app"
    }
  ];


  getProjects(){
    return this.projects;
  }
  

}


