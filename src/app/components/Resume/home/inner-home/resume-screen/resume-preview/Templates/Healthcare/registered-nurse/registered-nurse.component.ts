import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registered-nurse',
  imports: [CommonModule],
  templateUrl: './registered-nurse.component.html',
  styleUrl: './registered-nurse.component.scss'
})
export class RegisteredNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
