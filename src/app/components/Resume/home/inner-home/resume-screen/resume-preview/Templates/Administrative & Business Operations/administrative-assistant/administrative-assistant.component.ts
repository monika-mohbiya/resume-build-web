import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-administrative-assistant',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './administrative-assistant.component.html',
  styleUrl: './administrative-assistant.component.scss'
})
export class AdministrativeAssistantComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}

