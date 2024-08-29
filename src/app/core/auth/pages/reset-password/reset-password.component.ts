import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  recoverPasswordEmail!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.recoverPasswordEmail = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  emailSection = true;
  submitEmail = false;
  emailSubmit() {
    this.submitEmail = true;
}
}
