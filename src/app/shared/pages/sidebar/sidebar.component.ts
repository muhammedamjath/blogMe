import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] 
})
export class SidebarComponent implements  OnInit {
  name: string = 'John Doe';
  email: string = 'john.doe@example.com';

  @Input() sidebarOpen: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: any , private router:Router) {}

  

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      this.onScreenSizeLessThanLg();
    } else if (screenWidth >= 1024) {
      this.onScreenSizeLargerThanLg();
    }
  }

  onScreenSizeLessThanLg() {
    this.sidebarOpen = false; 
  }

  onScreenSizeLargerThanLg() {
    this.sidebarOpen = true;
  }

  logout(){
    const token = localStorage.getItem('token')
    if(token){
      localStorage.removeItem('token')
      this.router.navigate([''])
    }
  }
}
