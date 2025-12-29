import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maintenance-technician',
  imports: [CommonModule],
  templateUrl: './maintenance-technician.component.html',
  styleUrl: './maintenance-technician.component.scss'
})
export class MaintenanceTechnicianComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
