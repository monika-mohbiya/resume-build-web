import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nursing-consultant',
  imports: [CommonModule],
  templateUrl: './nursing-consultant.component.html',
  styleUrl: './nursing-consultant.component.scss'
})
export class NursingConsultantComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
