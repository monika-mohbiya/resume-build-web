import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-occupational-therapist',
  imports: [CommonModule],
  templateUrl: './occupational-therapist.component.html',
  styleUrl: './occupational-therapist.component.scss'
})
export class OccupationalTherapistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
