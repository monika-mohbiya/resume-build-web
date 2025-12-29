import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-entry-clerk',
  imports: [CommonModule],
  templateUrl: './data-entry-clerk.component.html',
  styleUrl: './data-entry-clerk.component.scss'
})
export class DataEntryClerkComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
