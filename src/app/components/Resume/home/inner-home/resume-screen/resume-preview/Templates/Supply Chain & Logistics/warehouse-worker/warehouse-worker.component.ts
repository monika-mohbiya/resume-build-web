import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-worker',
  imports: [CommonModule],
  templateUrl: './warehouse-worker.component.html',
  styleUrl: './warehouse-worker.component.scss'
})
export class WarehouseWorkerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
