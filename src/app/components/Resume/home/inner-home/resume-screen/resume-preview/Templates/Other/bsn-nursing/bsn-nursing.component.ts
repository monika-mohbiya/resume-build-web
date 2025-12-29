import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bsn-nursing',
  imports: [CommonModule],
  templateUrl: './bsn-nursing.component.html',
  styleUrl: './bsn-nursing.component.scss'
})
export class BSNNursingComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
