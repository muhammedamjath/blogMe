import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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
  resetPasswordForm!: FormGroup;
  emailSection = true;
  submitEmail = false;
  emailVerified = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.recoverPasswordEmail = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });

    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  emailSubmit() {
    this.submitEmail = true;
    if (this.recoverPasswordEmail.valid) {
      this.authService.resetPassword(this.recoverPasswordEmail.value).subscribe((res) => {
        if (res == 'email not verified') {
          alert('This email is not correct. Please try again');
        } else if (res == 'email verified') {          
          this.emailVerified = true;
          this.emailSection = false;
        }
      });
    }
  }

  passwordSubmit() {
    if (this.resetPasswordForm.valid) {
      const obj={ 
        email:this.recoverPasswordEmail.get('email')?.value,
        newPassword : this.resetPasswordForm.get('newPassword')?.value
      }
      this.authService.updatePassword(obj).subscribe((res)=>{
        if(res == 'invalid password'){
          alert('Enter a valid password .Password must be at least 8 characters long')
        }else if (res == 'password updated'){
          this.router.navigate(['/auth/login'])
        }
        
      })
    }
  }
}

