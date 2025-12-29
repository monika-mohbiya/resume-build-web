import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoaderComponent } from '../loader/loader.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-components',
  imports: [MatToolbarModule, MatMenuModule,
    MatButtonModule, CommonModule,
    MatIconModule, MatSidenavModule, MatListModule, LoaderComponent, RouterOutlet, CarouselModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  isMobile = false;
  constructor(private router: Router) { }
  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => {
      this.checkScreen();
    });
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
  }
  routeNav(path: string) {
    this.router.navigate([path]);
  }
  //   navRouter(data: any) {
  //   console.log(data)
  //   const rdata: any = localStorage.getItem('Selected ResumeData');
  //   this.resumeData = rdata ? JSON.parse(rdata) : data;
  //   // this.router.navigateByUrl('/template-resume');

  //   this.router.navigateByUrl('/template-resume', {
  //     state: {
  //       resumeData: this.resumeData
  //     }
  //   });
  // }
}
