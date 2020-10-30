import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Routes, RouterModule, RouteReuseStrategy} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as bootstrap from "bootstrap"
import { PreloadAllModules } from './apppreloader';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { AuthGuard  } from "./shared/auth.guard";
//Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'backoffice',
      loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule),
      canActivate: [AuthGuard]
  },
  {
      path: '**',
      component: ErrorComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BackofficeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
        BrowserModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            routes,
            {
                enableTracing: false,
                useHash: false,
                preloadingStrategy: PreloadAllModules
            })
  ],
  providers: [
        Title, AuthGuard,
        PreloadAllModules,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
