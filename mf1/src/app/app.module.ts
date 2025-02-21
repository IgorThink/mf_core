import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormsModule } from './forms/app-froms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppFormsModule, AppRoutingModule],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
