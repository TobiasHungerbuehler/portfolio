import { Injectable } from '@angular/core';
import { NavigationLink } from '../interfaces/navigation-link.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  // Hier stehen alle navigations-links die verwendet werden

  links: NavigationLink [] =  [
    {
      id: "aboutMe",
      text: "About Me",
    },
    {
      id: "mySkills",
      text: "My Skills",
    },
    {
      id: "portfolio",
      text: "Portfolio",
    },
    {
      id: "contact",
      text: "Contact",
    },
  ];

  getLinks() {
    return this.links;
  }
}
