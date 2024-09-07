import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../features.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  constructor(private servise:FeatureService, private router:Router){}
  blogs:any

  ngOnInit(): void {
    this.servise.fullBlogGet().subscribe((res)=>{
      this.blogs=res
    })
  }

  singleOpen(id:string){
    this.router.navigateByUrl(`/feature/home/blogViwe/${id}`)
  }
}
