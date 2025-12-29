import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dental-hygienist',
  imports: [CommonModule],
  templateUrl: './dental-hygienist.component.html',
  styleUrl: './dental-hygienist.component.scss'
})
export class DentalHygienistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
