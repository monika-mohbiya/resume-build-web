import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mechanical-engineer',
  imports: [CommonModule],
  templateUrl: './mechanical-engineer.component.html',
  styleUrl: './mechanical-engineer.component.scss'
})
export class MechanicalEngineerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
