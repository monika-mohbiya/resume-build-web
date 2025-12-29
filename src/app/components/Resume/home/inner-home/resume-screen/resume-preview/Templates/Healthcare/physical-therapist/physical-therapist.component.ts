import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-physical-therapist',
  imports: [CommonModule],
  templateUrl: './physical-therapist.component.html',
  styleUrl: './physical-therapist.component.scss'
})
export class PhysicalTherapistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
