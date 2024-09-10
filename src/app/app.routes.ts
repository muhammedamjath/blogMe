import { Routes } from '@angular/router';
import { MainLandPageComponent } from './features/pages/main-land-page/main-land-page.component';
import { faetureGuard } from './guards/faeture.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'auth',loadChildren:()=> import('./core/auth/auth.routes').then((m)=> m.authRoutes),canActivate:[authGuard]
    },
    {
        path:'feature',loadChildren:()=> import ('./features/features.routes').then((m)=> m.featureRoutes),canActivate:[faetureGuard]
    },
    {
        path:'',component:MainLandPageComponent
    }
];
