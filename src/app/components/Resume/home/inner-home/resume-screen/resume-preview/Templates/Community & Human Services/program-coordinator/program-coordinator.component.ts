import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-coordinator',
  imports: [CommonModule],
  templateUrl: './program-coordinator.component.html',
  styleUrl: './program-coordinator.component.scss'
})
export class ProgramCoordinatorComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
