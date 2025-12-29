import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-computer-scientist',
  imports: [CommonModule],
  templateUrl: './computer-scientist.component.html',
  styleUrl: './computer-scientist.component.scss'
})
export class ComputerScientistComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
