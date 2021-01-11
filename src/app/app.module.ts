import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CareerListComponent } from './careers/career-list/career-list.component';
import { CareerDetailsComponent } from './careers/career-details/career-details.component';
import { JobsComponent } from './jobs/jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    NotFoundComponent,
    CareerListComponent,
    CareerDetailsComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
