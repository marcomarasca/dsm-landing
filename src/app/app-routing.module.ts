import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LiveComponent } from './live/live.component';
import { HomeComponent } from './home/home.component';


import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.queryParams.url) {
      window.location.href = route.queryParams.url;
    }
    return false;
  }
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'live', component: LiveComponent },
  { path: 'redirect', canActivate: [RedirectGuard], component: RedirectGuard },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
