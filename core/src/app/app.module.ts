import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppFromsModule } from './forms/app-froms.module';
import { StoreService } from './store/store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppFromsModule,
    AppFromsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
