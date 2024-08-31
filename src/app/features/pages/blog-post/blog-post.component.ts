import { Component } from '@angular/core';
import { BlogFormComponent } from '../../../shared/pages/blog-form/blog-form.component';

@Component({
  selector: 'blog-post',
  standalone: true,
  imports: [
    BlogFormComponent
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

}
