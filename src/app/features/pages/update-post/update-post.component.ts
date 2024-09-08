import { Component } from '@angular/core';
import { BlogFormComponent } from '../../../shared/pages/blog-form/blog-form.component';
import { FeatureService } from '../../features.service';

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [
    BlogFormComponent
  ],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent {
  constructor(private service:FeatureService){}

  title:string = 'Update the blog'

  update(data:any){
      this.service.updateBlog(data).subscribe((res)=>{
        console.log(res); 
      })    
  }
}
