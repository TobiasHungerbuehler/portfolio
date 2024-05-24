import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  /**
   * Scrolls to the specified section with an offset to account for the header.
   * @param sectionId The ID of the section to scroll to.
   */
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.querySelector('.header') as HTMLElement;
      const headerOffset = header ? header.offsetHeight : 0;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
