import { Component } from '@angular/core';

@Component({
  selector: 'app-text-container',
  standalone: true,
  imports: [],
  templateUrl: './text-container.component.html',
  styleUrl: './text-container.component.scss'
})
export class TextContainerComponent {

  textP1 = "Hi, I'm Tobias, a front-end developer based in St. Gallen, Switzerland, who thrives on solving problems and digitalizing business processes. With a robust background in technical and sales environments, I bring a unique perspective to digital development, combining analytical problem-solving with a communicative approach to deliver straightforward solutions.";

  textP2 = "My programming journey began with a quest to enhance business operations, quickly evolving into a passion for leveraging web technologies to simplify complex processes and innovate digital interactions.";

  textP3 = "I develop user-friendly interfaces and robust backend systems to solve problems and improve workflows. I'm actively expanding my backend skills to tackle complex challenges more effectively.";
}
