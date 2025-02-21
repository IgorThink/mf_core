import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppFormsRoutingModule } from './app-forms-routing.module';
import { AuthFormComponent } from './components/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent, AppFormsRoutingModule],
  imports: [ReactiveFormsModule, CommonModule, AppFormsRoutingModule],
})
export class AppFormsModule {}
