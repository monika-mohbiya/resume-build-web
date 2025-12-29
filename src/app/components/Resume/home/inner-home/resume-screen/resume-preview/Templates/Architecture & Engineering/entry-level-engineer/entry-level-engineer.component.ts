import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry-level-engineer',
  imports: [CommonModule],
  templateUrl: './entry-level-engineer.component.html',
  styleUrl: './entry-level-engineer.component.scss'
})
export class EntryLevelEngineerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
