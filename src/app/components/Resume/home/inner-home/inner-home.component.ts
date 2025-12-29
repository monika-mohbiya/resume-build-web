import { Component, HostListener, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RESUME_TEMPLATES, RESUME_TEMPLATES2, RESUME_TEMPLATES3 } from '../../Models/resume';
import { ResumePreviewComponent } from './resume-screen/resume-preview/resume-preview.component';
import { CommonModule } from '@angular/common';
import { TEMPLATE_COMPONENT_MAP } from '../allTemplate';
import { ResumeScreenComponent } from './resume-screen/resume-screen.component';
import { AdministrativeAssistantComponent } from './resume-screen/resume-preview/Templates/Administrative & Business Operations/administrative-assistant/administrative-assistant.component';
export const ALL_RESUME_TEMPLATES = [
  ...RESUME_TEMPLATES,
  ...RESUME_TEMPLATES2,
  ...RESUME_TEMPLATES3
];

interface Industry {
  id: string;
  icon: string;
  title: string;
  data: {
    templateKey: string,
    title: string,
    section: {
      Contact: string,
      Experience: {
        Employer: string,
        RoleAndJobTitle: string,
        Start: string,
        EndDate: string,
        Location: string,
        Description: string,
      },
      Skills: string,
      Summary: string,
    }
  }[];
}
interface ResumeCard {
  title: string;
  industryId: string;
  industryTitle: string;
}

@Component({
  selector: 'app-inner-home',
  imports: [FormsModule, ResumePreviewComponent, CommonModule,],
  templateUrl: './inner-home.component.html',
  styleUrl: './inner-home.component.scss'
})

export class InnerHomeComponent {
  @Input() resumeData: any;
  @Input() templateKey!: string;
  @Input() selectColor!: string;
  @Input() sections: any;

  searchText = '';
  showStickySearch = false;
  router = inject(Router);
  isGlobalSearch = false;
  categories = ['Accountant', 'Business', 'Cashier', 'Engineer', 'Designer', 'Developer', 'Manager', 'Nurse', 'Intern', 'Teacher', 'Tutor'];

  resumes = [
    { title: 'Accountant Resume', description: 'Sample resume for Accountant role' },
    { title: 'Business Manager Resume', description: 'Sample resume for Business Manager' },
    { title: 'Software Engineer Resume', description: 'Sample resume for Software Engineer' },
    // Add more sample resumes
  ];
  // resumeData: any;
  selectedComponent: any;
  // resumeData: any;
  sectionsData: any[] = [];
  resumedata: any;
  previewSections = [
    { key: 'summary', label: 'Summary', enabled: true },
    { key: 'skills', label: 'Skills', enabled: true },
    { key: 'experience', label: 'Experience', enabled: true },
    { key: 'education', label: 'Education', enabled: true },
    { key: 'languages', label: 'Languages', enabled: true },
    { key: 'certificates', label: 'Certificates', enabled: true },
    { key: 'awards', label: 'Awards', enabled: true }
  ];
  // previewComponent = AdministrativeAssistantComponent;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.showStickySearch = scrollTop > 200; // show after scrolling 200px
  }

  ngOnInit() {
    const selected = history.state.selectedCard;
    if (selected) {
      this.selectIndustry(selected);
    }
    console.log("test", this.cardsToShow);

    const result = this.cardsToShow.find(
      card => card?.templateKey
    );
    if (result) {
      this.selectedComponent =
        TEMPLATE_COMPONENT_MAP[result?.templateKey];
    }
    console.log(this.selectedComponent)

    this.resumedata = this.cardsToShow.reduce((acc: any, item: any) => {
      acc[item.templateKey] = {
        templateKey: item.templateKey,
        title: item.title,
        section: item.section
      };
      return acc;
    }, {});
    console.log(this.resumedata)

  }


  onPreviewData(event: any) {
    this.selectedComponent = event.selectedComponent;
    this.resumedata = event.resumeData;
    this.sectionsData = event.sections;

    console.log('Selected Component:', this.selectedComponent);
    console.log('Resume Data:', this.resumedata);
    console.log('Sections:', this.sectionsData);
  }

  /* Search */
  onSearch() {
    const term = this.searchText.toLowerCase().trim();

    this.isGlobalSearch = !!term;

    if (!term) {
      this.filteredIndustries = [...this.industries];
      return;
    }

    this.filteredIndustries = this.industries.map((industry: any) => {
      const matchedRoles = industry.data.filter((role: any) =>
        role.title.toLowerCase().includes(term)
      );

      const industryMatch =
        industry.title.toLowerCase().includes(term);

      if (industryMatch || matchedRoles.length > 0) {
        return {
          ...industry,
          data: industryMatch ? industry.data : matchedRoles
        };
      }

      return null;
    }).filter((i: any): i is Industry => i !== null);
  }

  industries: any = ALL_RESUME_TEMPLATES
  filteredIndustries: Industry[] = [...this.industries];
  selectedIndustry: Industry = this.industries[0];

  /* Sidebar click */
  selectIndustry(ind: Industry) {
    // console.log(ind)
    this.isGlobalSearch = false;
    this.searchText = '';

    // ✅ reset industries
    this.filteredIndustries = [...this.industries];

    this.selectedIndustry = ind;
  }

  navRouter(data: any) {
    console.log(data)
    const rdata: any = localStorage.getItem('Selected ResumeData');
    this.resumedata = rdata ? JSON.parse(rdata) : data;
    // this.router.navigateByUrl('/template-resume');

    this.router.navigateByUrl('/template-resume', {
      state: {
        resumeData: this.resumedata
      }
    });




  }


  get cardsToShow() {
    if (this.isGlobalSearch) {
      return this.filteredIndustries.flatMap(ind =>
        ind.data.map(card => ({
          templateKey: card.templateKey,
          title: card.title,
          industryTitle: ind.title,
          section: card.section
        }))
      );
    }

    return this.selectedIndustry?.data ?? [];
  }
  onCategoryClick(category: string) {
    this.searchText = category;
    this.onSearch(); // 🔥 global search trigger
  }


  getComponent(templateKey: string) {
    return TEMPLATE_COMPONENT_MAP[templateKey];
  }

  getResumeData(card: any) {
    return {
      templateKey: card.templateKey,
      title: card.title,
      section: card.section
    };
  }

}

