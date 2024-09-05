import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {
  blogForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  imagefile: any;

  @Output() blogRegister = new EventEmitter<any>();
  @Input() isEditing = false;

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      photo: [null, [Validators.required]],
      scheduleDate: [''],
      scheduleTime: [''],
    });
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
    if (this.blogForm.valid) {
      this.emitData();
    } else if (!this.blogForm.valid) {
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
    formData.append('sceduleDate', this.blogForm.value.scheduleDate);
    formData.append('scheduleTime', this.blogForm.value.scheduleTime);

    this.blogRegister.emit(formData);
  }

  saveDraft(): void {
    console.log('Saving draft:', this.blogForm.value);
  }
}
