import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-human-resources-manager',
  imports: [CommonModule],
  templateUrl: './human-resources-manager.component.html',
  styleUrl: './human-resources-manager.component.scss'
})
export class HumanResourcesManagerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
