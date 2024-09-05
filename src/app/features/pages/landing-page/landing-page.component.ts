import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../features.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  constructor(private servise:FeatureService){}
  blogs:any

  ngOnInit(): void {
    this.servise.fullBlogGet().subscribe((res)=>{
      this.blogs=res
    })
  }
}
