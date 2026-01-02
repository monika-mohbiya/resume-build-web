import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-care-attendant',
  imports: [CommonModule],
  templateUrl: './personal-care-attendant.component.html',
  styleUrl: './personal-care-attendant.component.scss'
})
export class PersonalCareAttendantComponent {
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
