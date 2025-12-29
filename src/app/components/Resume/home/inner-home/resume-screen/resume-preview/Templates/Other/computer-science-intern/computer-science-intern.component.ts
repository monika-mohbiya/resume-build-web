import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-computer-science-intern',
  imports: [CommonModule],
  templateUrl: './computer-science-intern.component.html',
  styleUrl: './computer-science-intern.component.scss'
})
export class ComputerScienceInternComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
