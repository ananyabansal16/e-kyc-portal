import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './NewComponents/pages/pages.component';
import { NavbarComponent } from './NewComponents/navbar/navbar.component';
import { LoginpageComponent } from './NewComponents/loginpage/loginpage.component';
import { Navbar2Component } from './SearchKyc/navbar2/navbar2.component';
import { Form1Component } from './SearchKyc/form1/form1.component';
import { SearchKycPageComponent } from './SearchKyc/search-kyc-page/search-kyc-page.component';
import { ClientTypeComponent } from './SearchKyc/client-type/client-type.component';
import { FooterComponent } from './NewComponents/footer/footer.component';
import { Form3Component } from './CreateKyc/form3/form3.component';
import { EKycNotFoundPageComponent } from './NewComponents/ekyc-not-found-page/ekyc-not-found-page.component';
import { WelcomePageComponent } from './NewComponents/welcome-page/welcome-page.component';
import { ClientTypeCreateComponent } from './CreateKyc/client-type-create/client-type-create.component';
import { CreateKycPageComponent } from './CreateKyc/create-kyc-page/create-kyc-page.component';
import { AppService } from './app.service';
import { AboutComponent } from './NewComponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavbarComponent,
    LoginpageComponent,
    Navbar2Component,
    Form1Component,
    SearchKycPageComponent,
    ClientTypeComponent,
    FooterComponent,
    Form3Component,
    EKycNotFoundPageComponent,
    WelcomePageComponent,
    ClientTypeCreateComponent,
    CreateKycPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
