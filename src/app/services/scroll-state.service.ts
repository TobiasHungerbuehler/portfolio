// scroll-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {
  private sectionSource = new BehaviorSubject<string>('');

  currentSection = this.sectionSource.asObservable();

  constructor() {}

  changeSection(section: string) {
    this.sectionSource.next(section);
  }
}
