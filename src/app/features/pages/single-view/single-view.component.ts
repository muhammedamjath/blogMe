import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css',
})
export class SingleViewComponent {
  blog = {
    title: 'Blog Title',
    author: 'Author Name',
    authorImage: 'path-to-author-image.jpg',
    date: new Date(),
    image: 'https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=2048x2048&w=is&k=20&c=UINUY9pVBNtNF0bAH8zNO-AnIXAe1RBEdCQoPWQrz_A=',
    description:
      'This is the full description of the blog post. It can be as long as necessary to display all the content of the blog.This is the full description of the blog post. It can be as long as necessary to display all the content of the blog.This is the full description of the blog post. It can be as long as necessary to display all the content of the blog.This is the full description of the blog post. It can be as long as necessary to display all the content of the blog.This is the full description of the blog post. It can be as long as necessary to display all the content of the blog.This is the full description of the blog post. It can be as long as necessary to display all the content of the blog.',
  };
}
