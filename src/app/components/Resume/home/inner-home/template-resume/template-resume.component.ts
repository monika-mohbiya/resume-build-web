import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeScreenComponent } from '../resume-screen/resume-screen.component';

@Component({
  selector: 'app-template-resume',
  imports: [ResumeScreenComponent],
  templateUrl: './template-resume.component.html',
  styleUrl: './template-resume.component.scss'
})
export class TemplateResumeComponent {
  resumeData: any;

  ngOnInit() {
    this.resumeData = history.state.resumeData;
  }

}
