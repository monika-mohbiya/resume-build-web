import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-coordinator',
  imports: [CommonModule],
  templateUrl: './event-coordinator.component.html',
  styleUrl: './event-coordinator.component.scss'
})
export class EventCoordinatorComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
