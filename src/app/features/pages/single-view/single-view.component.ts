import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeatureService } from '../../features.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    ReactiveFormsModule
  ]    ,
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css',
})
export class SingleViewComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: FeatureService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.rescheduleForm = this.fb.group({
      newDate: ['', Validators.required],
      newTime: ['', Validators.required]
    });
  }

  rescheduleForm: FormGroup;
  
  blogId: string = '';
  blog: any;
  email: string | null = '';
  showRescheduleForm: boolean = false;
  showDeleteBtn: boolean = false;
  scheduleBtn:boolean = false

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
        if(this.blog.type == 'scheduled'){
          this.scheduleBtn =true
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

  rescheduleFormOpen(id:string ){
    this.showRescheduleForm = !this.showRescheduleForm
  }

  toggleRescheduleForm(): void {
    this.showRescheduleForm = !this.showRescheduleForm;
    if (!this.showRescheduleForm) {
      this.rescheduleForm.reset();
    }
  }

  onReschedule(): void {
    if (this.rescheduleForm.valid) {
      const rescheduleData = {
        blogId: this.blog._id,
        newDateTime: this.rescheduleForm.value
      };            
      this.service.blogReschedule(rescheduleData).subscribe((res)=>{
        console.log(res);
      })
      
      this.toggleRescheduleForm();
    }
  }
}
