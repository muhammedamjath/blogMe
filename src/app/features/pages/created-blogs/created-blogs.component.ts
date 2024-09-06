import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../features.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-blogs',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './created-blogs.component.html',
  styleUrl: './created-blogs.component.css',
})
export class CreatedBlogsComponent implements OnInit {
  constructor(private service: FeatureService , private router:Router) {}
  postedBlogs: any;

  ngOnInit(): void {
    this.service.postedBlogs().subscribe((res) => {
      this.postedBlogs = res;
    });
  }

  singleOpen(id:string){
    console.log('this is id:',id);
    this.router.navigateByUrl(`/feature/home/blogViwe/${id}`)
    
  }
}
