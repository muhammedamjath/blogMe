import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService
  ) {}

  showDiv: boolean = false;

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      email: [
        'muhammedamjath0@gmail.com',
        [Validators.required, Validators.email],
      ],
      password: ['Amjath@2002', Validators.required],
    });
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.authservice.loginpost(this.loginForm.value).subscribe((res) => {
        if (res.status == 'incorrect password') {
          alert('email or password is incorrect ');
        } else if (res.status == 'userData not fount') {
          alert('this account is not fount .please register');
          this.router.navigate(['/auth/register']);
        } else if (res.status == 'success') {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userEmail',res.data.email)
          this.router.navigate(['/feature/home']);
        }
      });
    }
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
}
