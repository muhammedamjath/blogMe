import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureService } from '../../features.service';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css',
})
export class SingleViewComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute , private service:FeatureService , private router:Router){}

  blogId:string = ''
  blog:any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.blogId = params['id'];
    });
    if(this.blogId){
      console.log(this.blogId);
      this.service.getSingleBlog(this.blogId).subscribe((res)=>{
        console.log(res);
        this.blog =res[0]
        console.log(this.blog);
        
      })
    }

  }


  deleteThis(id:string){
    if (confirm('Are you sure you want to delete this?')) {
      this.service.deleteBlog(id).subscribe((res) => {
        if(res == 'deleted'){
          this.router.navigate(['/feature/home'])
        }
      });
    }    
  }
}
