import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comporole';
  @ViewChild('descriptionSection') descriptionSectionRef!: ElementRef;

  scrollToDescription() {
    this.descriptionSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
