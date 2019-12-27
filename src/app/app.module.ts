import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { GetServiceService } from './get-service.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
