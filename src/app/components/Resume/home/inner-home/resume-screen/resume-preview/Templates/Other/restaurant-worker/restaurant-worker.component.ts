import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-worker',
  imports: [CommonModule],
  templateUrl: './restaurant-worker.component.html',
  styleUrl: './restaurant-worker.component.scss'
})
export class RestaurantWorkerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
