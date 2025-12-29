import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pre-op-nurse',
  imports: [CommonModule],
  templateUrl: './pre-op-nurse.component.html',
  styleUrl: './pre-op-nurse.component.scss'
})
export class PreOpNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
