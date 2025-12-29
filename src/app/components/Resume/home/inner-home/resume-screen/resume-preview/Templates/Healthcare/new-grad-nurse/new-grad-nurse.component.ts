import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-grad-nurse',
  imports: [CommonModule],
  templateUrl: './new-grad-nurse.component.html',
  styleUrl: './new-grad-nurse.component.scss'
})
export class NewGradNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
