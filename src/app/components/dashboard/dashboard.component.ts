import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Resume/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CarouselModule, HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { }
