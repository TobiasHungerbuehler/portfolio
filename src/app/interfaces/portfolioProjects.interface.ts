export interface Project {
  name: string;
  technologies: string[];
  description: {
    [key: string]: string; // Index signature
    en: string;
    de: string;
  };
  demoLink: string;
  githubLink: string;
  img: string;
}
