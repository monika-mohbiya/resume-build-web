import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-manager',
  imports: [CommonModule],
  templateUrl: './property-manager.component.html',
  styleUrl: './property-manager.component.scss'
})
export class PropertyManagerComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any[] = [];
  latestData: any;
  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }
  ngOnInit() {
    console.log(this.resumeData);
    // this.latestData = this.resumeData;

    const oldValueRaw = localStorage.getItem('Resume Data');
    if (oldValueRaw) {
      this.latestData = oldValueRaw ? JSON.parse(oldValueRaw) : this.resumeData;
      console.log(JSON.parse(oldValueRaw))
    } else {
      this.latestData = this.resumeData;
    }
  }

}
