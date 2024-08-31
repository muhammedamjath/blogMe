import { Routes } from "@angular/router";
import { BlogPostComponent } from "./pages/blog-post/blog-post.component";
import { HomeComponent } from "./pages/home/home.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

export const featureRoutes:Routes=[
    {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: '', component: LandingPageComponent },  
          { path: 'blogPost', component: BlogPostComponent }
        ]
      }
]