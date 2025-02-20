import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from "./components/auth-form.component";

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [ReactiveFormsModule]
})
export class AppFromsModule {

}