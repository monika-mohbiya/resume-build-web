import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-production-assistant',
  imports: [CommonModule],
  templateUrl: './customer-production-assistant.component.html',
  styleUrl: './customer-production-assistant.component.scss'
})
export class CustomerProductionAssistantComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
