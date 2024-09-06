import { Component, OnInit } from '@angular/core';
import { BlogFormComponent } from '../../../shared/pages/blog-form/blog-form.component';
import { FeatureService } from '../../features.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drafts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drafts.component.html',
  styleUrl: './drafts.component.css',
})
export class DraftsComponent implements OnInit {
  constructor(private service: FeatureService) {}
  drafts: any;
  ngOnInit(): void {
    this.service.draftedBlogs().subscribe((res) => {      
      this.drafts = res;
    });
  }
}
