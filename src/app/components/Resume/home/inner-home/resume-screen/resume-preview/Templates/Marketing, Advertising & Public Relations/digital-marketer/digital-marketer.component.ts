import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digital-marketer',
  imports: [CommonModule],
  templateUrl: './digital-marketer.component.html',
  styleUrl: './digital-marketer.component.scss'
})
export class DigitalMarketerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
