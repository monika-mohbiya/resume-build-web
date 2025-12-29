import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-front-desk-clerk',
  imports: [CommonModule],
  templateUrl: './front-desk-clerk.component.html',
  styleUrl: './front-desk-clerk.component.scss'
})
export class FrontDeskClerkComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
