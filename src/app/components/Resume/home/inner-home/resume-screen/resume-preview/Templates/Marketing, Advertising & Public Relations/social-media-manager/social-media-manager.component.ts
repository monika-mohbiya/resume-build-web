import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-manager',
  imports: [CommonModule],
  templateUrl: './social-media-manager.component.html',
  styleUrl: './social-media-manager.component.scss'
})
export class SocialMediaManagerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
}
