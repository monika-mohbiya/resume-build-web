import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-health-specialist',
  imports: [CommonModule],
  templateUrl: './public-health-specialist.component.html',
  styleUrl: './public-health-specialist.component.scss'
})
export class PublicHealthSpecialistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
