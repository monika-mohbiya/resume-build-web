import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labor-and-delivery-nurse',
  imports: [CommonModule],
  templateUrl: './labor-and-delivery-nurse.component.html',
  styleUrl: './labor-and-delivery-nurse.component.scss'
})
export class LaborAndDeliveryNurseComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
