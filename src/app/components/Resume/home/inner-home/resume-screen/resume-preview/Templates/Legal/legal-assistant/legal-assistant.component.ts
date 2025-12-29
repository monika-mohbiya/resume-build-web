import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legal-assistant',
  imports: [CommonModule],
  templateUrl: './legal-assistant.component.html',
  styleUrl: './legal-assistant.component.scss'
})
export class LegalAssistantComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
