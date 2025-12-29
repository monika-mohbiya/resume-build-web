import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-coordinator',
  imports: [CommonModule],
  templateUrl: './project-coordinator.component.html',
  styleUrl: './project-coordinator.component.scss'
})
export class ProjectCoordinatorComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
