import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practical-nurse',
  imports: [CommonModule],
  templateUrl: './practical-nurse.component.html',
  styleUrl: './practical-nurse.component.scss'
})
export class PracticalNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
