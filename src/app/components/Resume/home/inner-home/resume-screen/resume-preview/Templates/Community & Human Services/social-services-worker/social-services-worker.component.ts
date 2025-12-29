import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-services-worker',
  imports: [CommonModule],
  templateUrl: './social-services-worker.component.html',
  styleUrl: './social-services-worker.component.scss'
})
export class SocialServicesWorkerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
