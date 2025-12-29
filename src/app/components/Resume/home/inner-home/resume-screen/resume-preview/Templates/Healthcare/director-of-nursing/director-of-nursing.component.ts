import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-director-of-nursing',
  imports: [CommonModule],
  templateUrl: './director-of-nursing.component.html',
  styleUrl: './director-of-nursing.component.scss'
})
export class DirectorOfNursingComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
