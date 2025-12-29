import { Component, ViewChild, TemplateRef, Input, Output, EventEmitter, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumeDialogComponent } from '../../../../dialog/resume.dialog/resume.dialog.component';
import { TEMPLATE_COMPONENT_MAP } from '../../allTemplate';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ResumeSection {
  key: string;
  label: string;
  enabled: boolean;
  isCustom?: boolean;
  description?: string;
}

@Component({
  selector: 'app-resume-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, ResumePreviewComponent],
  templateUrl: './resume-screen.component.html',
  styleUrl: './resume-screen.component.scss'
})
export class ResumeScreenComponent {

  @ViewChild('manageSectionsTpl') manageSectionsTpl!: TemplateRef<any>;
  @ViewChild(ResumePreviewComponent)
  resumePreviewComp!: ResumePreviewComponent;
  selectedTemplateColor = 'black';
  showTemplatePopup = false;

  /* CUSTOM POPUPS */
  showNamePopup = false;
  showEditorPopup = false;

  newSectionName = '';
  activeSection: ResumeSection | null = null;

  sections: ResumeSection[] = [
    { key: 'summary', label: 'Summary', enabled: true },
    { key: 'skills', label: 'Skills', enabled: true },
    { key: 'experience', label: 'Experience', enabled: true },
    { key: 'education', label: 'Education', enabled: true },
    { key: 'languages', label: 'Languages', enabled: true },
    { key: 'certificates', label: 'Certificates', enabled: true },
    { key: 'awards', label: 'Awards', enabled: true }
  ];
  resumeData: any;
  selectedComponent: any;


  constructor(private dialog: MatDialog) { }


  ngOnInit() {
    this.resumeData = history.state.resumeData;
    console.log(this.resumeData);
    // console.log('templateKey:', this.resumeData?.templateKey);
    if (this.resumeData?.templateKey) {
      this.selectedComponent =
        TEMPLATE_COMPONENT_MAP[this.resumeData.templateKey];
    }

    // console.log(this.resumeData, this.selectedComponent);
  }


  /* ================= THEME ================= */

  changeTheme(color: string) {
    this.selectedTemplateColor = color;
  }

  /* ================= MANAGE SECTIONS ================= */

  openMngSec() {
    this.dialog.open(this.manageSectionsTpl, {
      panelClass: 'manage-sections-dialog',
      backdropClass: 'transparent-backdrop',
      disableClose: true
    });
  }

  closeManage() {
    this.dialog.closeAll();
  }

  isSectionEnabled(sectionName: string): boolean {
    return !!this.sections?.find(sec => sec.key === sectionName)?.enabled;
  }

  /* ================= CUSTOM SECTION ================= */

  openNamePopup() {
    this.newSectionName = '';
    this.showNamePopup = true;
  }

  closeNamePopup() {
    this.showNamePopup = false;
  }

  saveSectionName() {
    if (!this.newSectionName.trim()) return;

    this.activeSection = {
      key: this.newSectionName.toLowerCase().replace(/\s+/g, '_'),
      label: this.newSectionName,
      enabled: true,
      isCustom: true,
      description: ''
    };

    this.showNamePopup = false;
    this.showEditorPopup = true;
  }

  saveCustomSection() {
    if (!this.activeSection) return;

    this.sections.push({ ...this.activeSection });
    this.activeSection = null;
    this.showEditorPopup = false;
  }

  editCustomSection(section: ResumeSection) {
    this.activeSection = section;
    this.showEditorPopup = true;
  }

  closeEditorPopup() {
    this.showEditorPopup = false;
    this.activeSection = null;
  }

  /* ================= EXISTING EDIT ================= */

  openDialog(step: number) {
    this.dialog.open(ResumeDialogComponent, {
      width: '860px',
      maxWidth: '95vw',
      disableClose: true,
      data: { step }
    });
  }
  exportPDF() {

    // const element: any = document.querySelector('.template-screen');
    const resumeComp = this.resumePreviewComp;

    if (!resumeComp || !resumeComp.resumeRoot) {
      console.error('Resume element not found');
      alert('Resume is still loading, please try again');
      return;
    }

    const element = this.resumePreviewComp.resumeRoot.nativeElement;


    const A4_WIDTH_PT = 595.28;     // A4 width in PDF points
    const A4_HEIGHT_PT = 841.89;    // A4 height in PDF points

    html2canvas(element, {
      scale: 3,          // high quality
      useCORS: true,
      allowTaint: true,
      scrollX: 0,
      scrollY: -window.scrollY
    }).then(canvas => {

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'pt', 'a4');

      const imgWidth = A4_WIDTH_PT;
      const imgHeight = canvas.height * (imgWidth / canvas.width);

      let heightLeft = imgHeight;
      let startY = 0;

      // First page
      pdf.addImage(imgData, 'PNG', 0, startY, imgWidth, imgHeight);

      heightLeft -= A4_HEIGHT_PT;

      // Additional pages
      while (heightLeft > 0) {
        startY = heightLeft - imgHeight;

        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, startY, imgWidth, imgHeight);

        heightLeft -= A4_HEIGHT_PT;
      }

      pdf.save("resume.pdf");
    });
  }
  // get selectedComponent() {

  //   const comp = TEMPLATE_COMPONENT_MAP[this.resumeData?.templateKey];
  //   return comp;
  // }
}
