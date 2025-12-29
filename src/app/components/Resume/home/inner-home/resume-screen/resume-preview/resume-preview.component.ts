import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewChild, type ElementRef } from '@angular/core';

@Component({
  selector: 'app-resume-preview',
  imports: [CommonModule],
  templateUrl: './resume-preview.component.html',
  styleUrl: './resume-preview.component.scss'
})
export class ResumePreviewComponent {
  @Input() selectedComponent: any;
  @Input() resumeData: any;
  @Input() sections: any[] = [];
  @Input() selectColor!: string;
  @ViewChild('resumeRoot', { static: false })
  resumeRoot!: ElementRef;
  ngOnInit() {
    // console.log('resumeData:', this.resumeData);
    // console.log('selectedComponent:', this.selectedComponent);
    // console.log('sections:', this.sections);
    // console.log('selectColor:', this.selectColor);



  }

}  
