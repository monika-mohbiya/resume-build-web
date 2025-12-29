import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-law-enforcement',
  imports: [CommonModule],
  templateUrl: './law-enforcement.component.html',
  styleUrl: './law-enforcement.component.scss'
})
export class LawEnforcementComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
