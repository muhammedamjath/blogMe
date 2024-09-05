import { Component } from '@angular/core';
import { BlogFormComponent } from '../../../shared/pages/blog-form/blog-form.component';
import { FeatureService } from '../../features.service';

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

  constructor(private featureService:FeatureService){}
  postData(data:any){
    const datas=data
    this.featureService.blogPost(datas).subscribe((res)=>{
      console.log(res);
      
    })
    
  }
}
