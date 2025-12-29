import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-electrical-engineer',
  imports: [CommonModule],
  templateUrl: './electrical-engineer.component.html',
  styleUrl: './electrical-engineer.component.scss'
})
export class ElectricalEngineerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
