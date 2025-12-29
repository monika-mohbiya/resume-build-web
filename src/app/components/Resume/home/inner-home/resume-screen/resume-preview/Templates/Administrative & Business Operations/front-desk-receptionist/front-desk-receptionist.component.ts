import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-front-desk-receptionist',
  imports: [CommonModule],
  templateUrl: './front-desk-receptionist.component.html',
  styleUrl: './front-desk-receptionist.component.scss'
})
export class FrontDeskReceptionistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
