import { Component, Input } from '@angular/core';
import { Skill } from '../../interfaces/skills.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {

  @Input() skill!: Skill;
  
}
