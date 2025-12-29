import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { RESUME_TEMPLATES, RESUME_TEMPLATES2, RESUME_TEMPLATES3 } from '../Models/resume';
import { Router, RouterLink } from '@angular/router';
import { ResumePreviewComponent } from './inner-home/resume-screen/resume-preview/resume-preview.component';
import { TEMPLATE_COMPONENT_MAP } from './allTemplate';
export const ALL_RESUME_TEMPLATES = [
  ...RESUME_TEMPLATES,
  ...RESUME_TEMPLATES2,
  ...RESUME_TEMPLATES3
];
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink, ResumePreviewComponent,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// export class HomeComponent implements AfterViewInit {
//   showCarousel = false;
//   router = inject(Router);
//   slides = ALL_RESUME_TEMPLATES;

//   carouselOptions: OwlOptions = {
//     center: true,
//     loop: true,
//     margin: 15,
//     dots: true,
//     nav: false,
//     mouseDrag: true,
//     touchDrag: true,
//     autoWidth: false,
//     responsive: {
//       0: { items: 1 },
//       576: { items: 2 },
//       768: { items: 3 },
//       992: { items: 4 },
//       1200: { items: 5 }
//     }
//   };


//   ngAfterViewInit() {
//     setTimeout(() => {
//       this.showCarousel = true;
//     }, 0);
//   }
//   SelectCtg(data: any) {
//     console.log(data)
//     // this.router.navigateByUrl('/inner-home');
//     this.router.navigateByUrl('/inner-home', {
//       state: {
//         selectedCard: data
//       }
//     });
//   }
// }

export class HomeComponent implements AfterViewInit {

  showCarousel = false;
  router = inject(Router);

  slides = ALL_RESUME_TEMPLATES;
  chunkedSlides: any[] = [];

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    items: 1   // ⚠️ ek slide me ek hi group
  };
  previewSections = [
    { key: 'summary', label: 'Summary', enabled: true },
    { key: 'skills', label: 'Skills', enabled: true },
    { key: 'experience', label: 'Experience', enabled: true },
    { key: 'education', label: 'Education', enabled: true },
    { key: 'languages', label: 'Languages', enabled: true },
    { key: 'certificates', label: 'Certificates', enabled: true },
    { key: 'awards', label: 'Awards', enabled: true }
  ];
  ngAfterViewInit() {
    this.chunkedSlides = this.chunkArray(this.slides, 8);
    setTimeout(() => {
      this.showCarousel = true;
    });
  }

  chunkArray(arr: any[], size: number) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  SelectCtg(data: any) {
    this.router.navigateByUrl('/inner-home', {
      state: { selectedCard: data }
    });
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




