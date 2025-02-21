import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  imports: [ReactiveFormsModule],
})
export class AppFormsModule {}
