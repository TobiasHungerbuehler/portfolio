import { Component,HostListener, ElementRef} from '@angular/core';
import { ScrollStateService } from '../services/scroll-state.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(private elementRef: ElementRef, // Injectiert eine Referenz auf das DOM-Element der Komponente.
  private scrollService: ScrollStateService) // Injectiert den Service, der für die Scroll-Überwachung zuständig ist.
{}

  @HostListener('window:scroll') // Horcht auf das Scroll-Event des Fensters.

  onScroll() { // Wird jedes Mal aufgerufen, wenn auf der Seite gescrollt wird.
  this.scrollService.checkAndEmitVisibility(this.elementRef, 'mySkills'); // Ruft eine Methode im scrollService auf, die prüft, ob das Element sichtbar ist, und einen Zustand entsprechend ändert.
}






skills = [
  {
    name: "JavaScript",
    img:"javaScript.png",
  },
  {
    name: "Angular",
    img:"angular.png",
  },
  {
    name: "TypeScript",
    img:"typeScript.png",
  },
  {
    name: "HTML",
    img:"html.png",
  },
  {
    name: "GIT",
    img:"git.png",
  },
  {
    name: "Firebase",
    img:"firebase.png",
  },
  {
    name: "CSS",
    img:"css.png",
  },
  {
    name: "Scrum",
    img:"scrum.png",
  },
  {
    name: "Rest-API",
    img:"api.png",
  },
  {
    name: "Material design",
    img:"materialDesign.png",
  },
]  

}

