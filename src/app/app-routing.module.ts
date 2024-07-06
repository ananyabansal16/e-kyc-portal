import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchKycPageComponent } from './SearchKyc/search-kyc-page/search-kyc-page.component';
import { PagesComponent } from './NewComponents/pages/pages.component';
import { Form1Component } from './SearchKyc/form1/form1.component';
import { Form3Component } from './CreateKyc/form3/form3.component';
import { EKycNotFoundPageComponent } from './NewComponents/ekyc-not-found-page/ekyc-not-found-page.component';
import { WelcomePageComponent } from './NewComponents/welcome-page/welcome-page.component';
import { CreateKycPageComponent } from './CreateKyc/create-kyc-page/create-kyc-page.component';
import { AboutComponent } from './NewComponents/about/about.component';


const routes: Routes = [
  { path: '', component: PagesComponent},
  { path: 'Welcome-Page', component: WelcomePageComponent},
  { path: 'About-Page', component: AboutComponent},
  { path: 'Search-E-Kyc/Client-Type', component: SearchKycPageComponent,},
  { path: 'Create-E-Kyc/Client-Type', component: CreateKycPageComponent,},
  { path: 'Search-E-Kyc/Details', component: Form1Component,},
  { path: 'Search-E-Kyc/Results', component: EKycNotFoundPageComponent,},
  { path: 'Create-E-Kyc/Details', component: Form3Component,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
