import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'blog-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent  {
  blogForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      photo: [null],
      scheduleDate: [''],
      scheduleTime: ['']
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
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
    if (this.blogForm.valid) {
      console.log('Submitting blog post:', this.blogForm.value);
      // Add your submission logic here
    }
  }

  saveDraft(): void {
    console.log('Saving draft:', this.blogForm.value);
    // Add your draft saving logic here
  }

  schedulePost(): void {
    if (this.blogForm.valid) {
      const scheduledDateTime = this.combineDateTime(
        this.blogForm.get('scheduleDate')?.value,
        this.blogForm.get('scheduleTime')?.value
      );
      console.log('Scheduling post for:', scheduledDateTime);
      console.log('Post details:', this.blogForm.value);
      // Add your post scheduling logic here
    }
  }

  combineDateTime(date: string, time: string): Date {
    if (!date || !time) return new Date();
    const [year, month, day] = date.split('-').map(Number);
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }
}
