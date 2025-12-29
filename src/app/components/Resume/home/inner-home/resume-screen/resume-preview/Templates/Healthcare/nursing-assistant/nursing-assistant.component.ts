import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nursing-assistant',
  imports: [CommonModule],
  templateUrl: './nursing-assistant.component.html',
  styleUrl: './nursing-assistant.component.scss'
})
export class NursingAssistantComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
