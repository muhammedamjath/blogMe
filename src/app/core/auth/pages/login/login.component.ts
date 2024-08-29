import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private FormBuilder:FormBuilder , private router:Router){}

  showDiv: boolean = false;

  
  loginForm!:FormGroup
  
  
  ngOnInit(){
    this.loginForm=this.FormBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  
  
  submitted = false;
  onSubmit(){
    this.submitted=true
  }

  // optional div function call
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
}
