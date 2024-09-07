import { Component, OnInit } from '@angular/core';
import { BlogFormComponent } from '../../../shared/pages/blog-form/blog-form.component';
import { FeatureService } from '../../features.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drafts',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './drafts.component.html',
  styleUrl: './drafts.component.css',
})
export class DraftsComponent implements OnInit {
  constructor(private service: FeatureService , private router:Router) {}
  drafts: any;
  ngOnInit(): void {
    this.service.draftedBlogs().subscribe((res) => {      
      this.drafts = res;
    });
  }

  singleOpen(id:string){
    this.router.navigateByUrl(`/feature/home/blogViwe/${id}`)
  }
}
