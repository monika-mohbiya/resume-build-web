import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-health-aide',
  imports: [CommonModule],
  templateUrl: './home-health-aide.component.html',
  styleUrl: './home-health-aide.component.scss'
})
export class HomeHealthAideComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
