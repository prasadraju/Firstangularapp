import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './News/news.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found.component';


var routes:Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'news',component:NewsComponent},
  { path: '**', component: PageNotFoundComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent,LoginComponent,DashboardComponent,HomeComponent,AboutComponent,NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

