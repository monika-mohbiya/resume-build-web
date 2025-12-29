import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pediatric-nurse',
  imports: [CommonModule],
  templateUrl: './pediatric-nurse.component.html',
  styleUrl: './pediatric-nurse.component.scss'
})
export class PediatricNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
