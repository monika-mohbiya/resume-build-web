import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-surgical-technician',
  imports: [CommonModule],
  templateUrl: './surgical-technician.component.html',
  styleUrl: './surgical-technician.component.scss'
})
export class SurgicalTechnicianComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
