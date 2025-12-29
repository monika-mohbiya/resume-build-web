import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-occupational-therapy',
  imports: [CommonModule],
  templateUrl: './occupational-therapy.component.html',
  styleUrl: './occupational-therapy.component.scss'
})
export class OccupationalTherapyComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
