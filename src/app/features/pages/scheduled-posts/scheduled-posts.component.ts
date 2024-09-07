import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../features.service';

@Component({
  selector: 'app-scheduled-posts',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './scheduled-posts.component.html',
  styleUrl: './scheduled-posts.component.css'
})
export class ScheduledPostsComponent implements OnInit {

  constructor(private service:FeatureService){}

  scheduledBlogs:any

  ngOnInit(): void {
    this.service.scheduledBlogs().subscribe((res)=>{
      this.scheduledBlogs = res
    })
  }

  singleOpen(id:string){

  }
}
