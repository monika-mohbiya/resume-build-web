import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pediatric-registered-nurse',
  imports: [CommonModule],
  templateUrl: './pediatric-registered-nurse.component.html',
  styleUrl: './pediatric-registered-nurse.component.scss'
})
export class PediatricRegisteredNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
