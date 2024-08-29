import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import {  provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
 

  constructor(private FormBuilder: FormBuilder , private authService:AuthService  , private router:Router) {}

 

  ngOnInit() {
    this.signupForm = this.FormBuilder.group({
      name: ['amju', Validators.required],
      email: ['muhammedamjath0@gmail.com', [Validators.required, Validators.email]],
      password: [
        'Amjath@2002',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
          ),
        ],
      ],
    });
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.authService.signupPost(this.signupForm.value).subscribe((res)=>{
        if(res == 'incorrect email or password'){
          alert('Enter a valid email or password')
        }else if (res == 'this email is already exist' ){
          alert('This email is already exist')
        }else if(res == 'account created successfully'){
          this.router.navigate(['/auth/login'])
        }
        
      })
    }
  }

}
