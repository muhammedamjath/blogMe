import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureService } from '../../features.service';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css',
})
export class SingleViewComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: FeatureService,
    private router: Router
  ) {}

  blogId: string = '';
  blog: any;
  showDeleteBtn: boolean = false;
  email: string | null = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.blogId = params['id'];
    });

    if (this.blogId) {
      this.service.getSingleBlog(this.blogId).subscribe((res) => {
        this.blog = res[0];
        this.email = localStorage.getItem('userEmail');
        if (this.email) {
          if (this.blog.userData[0].email == this.email) {
            this.showDeleteBtn = true;
          }
        }
      });
    }
  }

  deleteThis(id: string) {
    if (confirm('Are you sure you want to delete this?')) {
      this.service.deleteBlog(id).subscribe((res) => {
        if (res == 'deleted') {
          this.router.navigate(['/feature/home']);
        }
      });
    }
  }
}
