import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landscape-designer',
  imports: [CommonModule],
  templateUrl: './landscape-designer.component.html',
  styleUrl: './landscape-designer.component.scss'
})
export class LandscapeDesignerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
