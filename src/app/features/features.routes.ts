import { Routes } from "@angular/router";
import { BlogPostComponent } from "./pages/blog-post/blog-post.component";
import { HomeComponent } from "./pages/home/home.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { SingleViewComponent } from "./pages/single-view/single-view.component";
import { CreatedBlogsComponent } from "./pages/created-blogs/created-blogs.component";
import { DraftsComponent } from "./pages/drafts/drafts.component";
import { ScheduledPostsComponent } from "./pages/scheduled-posts/scheduled-posts.component";
import { UpdatePostComponent } from "./pages/update-post/update-post.component";

export const featureRoutes:Routes=[
    {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: '', component: LandingPageComponent },  
          { path: 'blogPost', component: BlogPostComponent },
          {path:'blogViwe/:id',component:SingleViewComponent},
          {path:'createdblogs',component:CreatedBlogsComponent},
          {path:'drafts',component:DraftsComponent},
          {path:'scheduled',component:ScheduledPostsComponent},
          {path:'updateBlog/:id',component:UpdatePostComponent}
        ]
      }
]