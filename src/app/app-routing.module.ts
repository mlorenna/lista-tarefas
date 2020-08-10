import { HomeGuard } from './home/guards/home.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { NotFoundComponent } from './layouts/containers/not-found/not-found.component';
import { MenuBarComponent } from './layouts/containers/menu-bar/menu-bar.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), 
      canActivate: [AuthGuard]},
    ]
},
  {
    path: '', component: MenuBarComponent,
    children: [
      { 
        path: 'home', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [HomeGuard]
      }
    ]
  },
  {
    path: '',
    component: MenuBarComponent,
    children: [
        {
            path: '**',
            redirectTo: 'notfound',
            pathMatch: 'full'
        },
        {
            path: 'notfound',
            component: NotFoundComponent
        }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
