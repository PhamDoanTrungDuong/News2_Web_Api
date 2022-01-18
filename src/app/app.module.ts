import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { News2apiservicesService } from '../app/service/news2apiservices.service';
import { TopHeadingComponent } from './top-heading/top-heading.component'
@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [News2apiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
