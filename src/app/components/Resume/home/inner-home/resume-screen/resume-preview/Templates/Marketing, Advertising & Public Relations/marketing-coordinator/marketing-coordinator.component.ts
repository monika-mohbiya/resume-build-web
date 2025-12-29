import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marketing-coordinator',
  imports: [CommonModule],
  templateUrl: './marketing-coordinator.component.html',
  styleUrl: './marketing-coordinator.component.scss'
})
export class MarketingCoordinatorComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
