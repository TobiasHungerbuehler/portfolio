import { Injectable } from "@angular/core";
import { SkillGroup, Skill } from "../interfaces/skills.interface";

@Injectable({
    providedIn: "root",
})
export class SkillsService {
    private skills: Skill[] = [
        {
            name: "JavaScript",
            img: "javaScript.png",
        },
        {
            name: "GIT",
            img: "git.png",
        },
        {
            name: "Scrum",
            img: "scrum.png",
        },
        {
            name: "Material design",
            img: "materialDesign.png",
        },
        {
            name: "Angular",
            img: "angular.png",
        },
        {
            name: "Firebase",
            img: "firebase.png",
        },
        {
            name: "Rest-API",
            img: "api.png",
        },
        {
            name: "TypeScript",
            img: "typeScript.png",
        },
        {
            name: "CSS",
            img: "css.png",
        },
        {
            name: "HTML",
            img: "html.png",
        },
        {
            name: "Continually learning",
            img: "learning.png",
        },
    ];

    getSkills() {
        return this.skills;
    }
}
