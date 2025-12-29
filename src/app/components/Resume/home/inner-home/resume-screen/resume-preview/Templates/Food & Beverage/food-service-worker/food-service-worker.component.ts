import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-service-worker',
  imports: [CommonModule],
  templateUrl: './food-service-worker.component.html',
  styleUrl: './food-service-worker.component.scss'
})
export class FoodServiceWorkerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
