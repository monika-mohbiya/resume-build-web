import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-physician',
  imports: [CommonModule],
  templateUrl: './physician.component.html',
  styleUrl: './physician.component.scss'
})
export class PhysicianComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
