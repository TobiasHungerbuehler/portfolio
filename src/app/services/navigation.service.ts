import { Injectable } from '@angular/core';
import { NavigationLink } from '../interfaces/navigation-interface.';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  links: NavigationLink[] = [
    { id: "aboutMe", text: "About Me" },
    { id: "mySkills", text: "My Skills" },
    { id: "portfolio", text: "Portfolio" },
    { id: "contact", text: "Contact" }
  ];

  getLinks(): NavigationLink[] {
    return this.links;
  }


}
