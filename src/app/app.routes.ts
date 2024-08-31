import { Routes } from '@angular/router';
import { MainLandPageComponent } from './features/pages/main-land-page/main-land-page.component';

export const routes: Routes = [
    {
        path:'auth',loadChildren:()=> import('./core/auth/auth.routes').then((m)=> m.authRoutes)
    },
    {
        path:'feature',loadChildren:()=> import ('./features/features.routes').then((m)=> m.featureRoutes)
    },
    {
        path:'share',loadChildren:()=> import ('./shared/shared.routes').then((m)=> m.SharedRoutes)
    },
    {
        path:'',component:MainLandPageComponent
    }
];
