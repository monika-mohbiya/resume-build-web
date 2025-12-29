import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pediatric-occupational-therapist',
  imports: [CommonModule],
  templateUrl: './pediatric-occupational-therapist.component.html',
  styleUrl: './pediatric-occupational-therapist.component.scss'
})
export class PediatricOccupationalTherapistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
