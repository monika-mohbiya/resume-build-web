import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leasing-consultant',
  imports: [CommonModule],
  templateUrl: './leasing-consultant.component.html',
  styleUrl: './leasing-consultant.component.scss'
})
export class LeasingConsultantComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
