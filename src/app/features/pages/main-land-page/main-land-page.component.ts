import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'main-land-page',
  standalone: true,
  imports: [],
  templateUrl: './main-land-page.component.html',
  styleUrl: './main-land-page.component.css'
})
export class MainLandPageComponent implements OnInit {
  constructor(private router:Router){}
  token:any 
  btnContent:string = ''

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token'); 
    }
    if(this.token){
      this.btnContent = 'Start'
    }else{
      this.btnContent = 'Sign up'
    }
  }

  createNewPost(){
    if(this.token){
      this.router.navigate(['/feature/home/blogPost'])
    }else{
      this.router.navigate(['/auth/login'])
    }
  }

  getStart(){
    if(this.token){
      this.router.navigate(['/feature/home'])
    }else{
      this.router.navigate(['/auth/login'])
    }
  }

  bottomBtn(){
    if(this.token){
      this.router.navigate(['/feature/home'])
    }else{
      this.router.navigate(['/auth/login'])
    }
  }
}
