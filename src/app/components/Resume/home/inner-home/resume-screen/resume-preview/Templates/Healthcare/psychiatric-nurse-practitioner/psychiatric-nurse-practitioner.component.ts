import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-psychiatric-nurse-practitioner',
  imports: [CommonModule],
  templateUrl: './psychiatric-nurse-practitioner.component.html',
  styleUrl: './psychiatric-nurse-practitioner.component.scss'
})
export class PsychiatricNursePractitionerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
