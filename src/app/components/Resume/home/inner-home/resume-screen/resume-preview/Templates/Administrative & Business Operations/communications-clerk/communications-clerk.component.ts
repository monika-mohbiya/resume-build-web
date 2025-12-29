import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-communications-clerk',
  imports: [CommonModule],
  templateUrl: './communications-clerk.component.html',
  styleUrl: './communications-clerk.component.scss'
})
export class CommunicationsClerkComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}

