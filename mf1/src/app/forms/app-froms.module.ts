import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./components/auth-form.component";
import { AppFormsRoutingModule } from "./app-forms-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent, AppFormsRoutingModule],
  imports: [ReactiveFormsModule, CommonModule, AppFormsRoutingModule]
})
export class AppFromsModule {

}