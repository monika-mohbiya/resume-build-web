import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-grad-rn',
  imports: [CommonModule],
  templateUrl: './new-grad-rn.component.html',
  styleUrl: './new-grad-rn.component.scss'
})
export class NewGradRNComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
