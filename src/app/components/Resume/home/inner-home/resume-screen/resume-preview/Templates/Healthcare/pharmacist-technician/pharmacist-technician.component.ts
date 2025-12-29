import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pharmacist-technician',
  imports: [CommonModule],
  templateUrl: './pharmacist-technician.component.html',
  styleUrl: './pharmacist-technician.component.scss'
})
export class PharmacistTechnicianComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
