import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { Routconst } from './constants/routconstant';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: Routconst.Home,
    component: HomeComponent,
  },
  {
    component: AboutUsComponent,
    path: Routconst.About,
  },
  {
    component: ServicesComponent,
    path: Routconst.Services
  },
  {
    component: ContactUsComponent,
    path: Routconst.Contact
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
