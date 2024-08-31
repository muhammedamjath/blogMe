import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SidebarComponent } from '../../../shared/pages/sidebar/sidebar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    LandingPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}


  sidebarOpen = true;
  closeBtn:boolean = !this.sidebarOpen

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      this.onScreenSizeLessThanLg();
    }
  }

  onScreenSizeLessThanLg() {
    this.sidebarOpen = false; 
  }

  toggleSidebar() {
    
    this.sidebarOpen = !this.sidebarOpen;
    this.closeBtn=!this.sidebarOpen
    
  }
}
