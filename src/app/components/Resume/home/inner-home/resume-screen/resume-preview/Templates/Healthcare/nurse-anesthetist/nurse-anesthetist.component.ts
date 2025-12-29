import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nurse-anesthetist',
  imports: [CommonModule],
  templateUrl: './nurse-anesthetist.component.html',
  styleUrl: './nurse-anesthetist.component.scss'
})
export class NurseAnesthetistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
