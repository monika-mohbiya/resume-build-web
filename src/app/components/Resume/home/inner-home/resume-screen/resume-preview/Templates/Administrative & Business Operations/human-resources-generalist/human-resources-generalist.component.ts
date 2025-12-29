import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-human-resources-generalist',
  imports: [CommonModule],
  templateUrl: './human-resources-generalist.component.html',
  styleUrl: './human-resources-generalist.component.scss'
})
export class HumanResourcesGeneralistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
