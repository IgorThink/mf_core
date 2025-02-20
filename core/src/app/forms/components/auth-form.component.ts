import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { StoreService } from "src/app/store/store.service";

@Component({
  selector: 'app-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class FormComponent {
  public authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(private readonly fb: FormBuilder, private readonly store: StoreService) {
    this.store.formData.subscribe((data: any) => {
      this.authForm.setValue(data)
    })
  }

  submit(): void {
    this.store.formData.next(this.authForm.getRawValue() as any)
  }
}