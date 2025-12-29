// import { Component, inject, AfterViewInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ResumeScreenComponent } from '../../resume-screen/resume-screen.component';

// @Component({
//   selector: 'app-sample-resume',
//   imports: [ResumeScreenComponent],
//   templateUrl: './sample-resume.component.html',
//   styleUrl: './sample-resume.component.scss'
// })
// export class SampleResumeComponent implements AfterViewInit {
//   activeSection = 'sample';
//   router = inject(Router);
//   contents = [
//     { id: 'sample', label: 'Sample Resume' },
//     { id: 'skills', label: 'Skills', badge: true },
//     { id: 'tips', label: 'Resume Tips' },
//     { id: 'similar', label: 'Similar Samples' }
//   ];

//   ngAfterViewInit() {
//     const sections = document.querySelectorAll('.spy-section');

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             this.activeSection = entry.target.id;
//           }
//         });
//       },
//       {
//         rootMargin: '-40% 0px -50% 0px',
//         threshold: 0
//       }
//     );

//     sections.forEach(section => observer.observe(section));
//   }

//   scrollTo(id: string) {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   }
//   navRoute() {
//     this.router.navigateByUrl('/template-resume')
//   }
// }
