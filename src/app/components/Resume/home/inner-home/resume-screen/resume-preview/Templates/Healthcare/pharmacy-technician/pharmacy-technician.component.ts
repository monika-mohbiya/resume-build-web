import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pharmacy-technician',
  imports: [CommonModule],
  templateUrl: './pharmacy-technician.component.html',
  styleUrl: './pharmacy-technician.component.scss'
})
export class PharmacyTechnicianComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
