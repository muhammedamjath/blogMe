import { Component } from '@angular/core';
import { BlogFormComponent } from '../../../shared/pages/blog-form/blog-form.component';
import { FeatureService } from '../../features.service';
import { Router } from '@angular/router';

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

  title:string = 'Create a blog'

  constructor(private featureService:FeatureService , private router:Router){}
  
  postData(data:any){
    const datas=data
    this.featureService.blogPost(datas).subscribe((res)=>{
      if(res == 'blog created'){
        this.router.navigate(['/feature/home'])
      }
      
    })
    
  }
}
