import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../../../features/features.service';

@Component({
  selector: 'blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  imagefile: any;
  blogId: string = '';
  blogDetailes: any;
  imageUrl: string = '';

  @Input() title: string = '';
  @Output() blogRegister = new EventEmitter<any>();
  @Input() isEditing = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoutes: ActivatedRoute,
    private service: FeatureService
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      photo: [null],
      scheduleDate: [''],
      scheduleTime: [''],
      submitType: [''],
      id:['']
    });
  }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      this.blogId = params['id'];
    });

    if (this.blogId) {
      this.service.getSingleBlog(this.blogId).subscribe((res) => {
        const { image, ...otherDetailes } = res[0];
        this.blogDetailes = otherDetailes;
        this.imageUrl = image;
        this.blogForm.patchValue(this.blogDetailes);
      });
    }
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.imagefile = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.blogForm.patchValue({ photo: file });
      this.blogForm.get('photo')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.blogForm.get('title')?.value && this.blogForm.get('description')?.value) {
      this.blogForm.patchValue({ submitType: 'post' ,id:this.blogId });
      this.emitData();
    }
  }

  emitData() {
    const formData = new FormData();
    if (this.imagefile) {
      formData.append('photo', this.imagefile);
    }
    formData.append('title', this.blogForm.value.title);
    formData.append('description', this.blogForm.value.description);
    formData.append('scheduleDate', this.blogForm.value.scheduleDate);
    formData.append('scheduleTime', this.blogForm.value.scheduleTime);
    formData.append('submitType', this.blogForm.value.submitType);
    if (this.blogForm.value.id) {
      formData.append('id', this.blogForm.value.id);
    }

    this.blogRegister.emit(formData);
  }

  saveDraft(): void {
    this.blogForm.patchValue({ submitType: 'draft' ,id:this.blogId });
    this.emitData();
  }
}
