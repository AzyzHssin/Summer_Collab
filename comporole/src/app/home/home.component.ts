import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('descriptionSection') descriptionSectionRef!: ElementRef;
  @ViewChild('ActSection') actSectionRef!: ElementRef;
  @ViewChild('contactSection') conSectionRef!: ElementRef;
  @ViewChild('solSection') solSectionRef!: ElementRef;
  scrollToDescription() {
    this.descriptionSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollTocontact() {
    this.conSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollTosolution() {
    this.solSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollTosAct() {
    this.actSectionRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
