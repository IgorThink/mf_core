import { ChangeDetectionStrategy, Component, EventEmitter, Host, HostListener, Input, SimpleChange } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  @Input() public form: {
    email: string,
    password: string
  } = {} as any
  @Input() public userName: string = 'Илья'

  @Input() public isRoot: boolean = false
  public authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  public submitClick:  EventEmitter<{
    email: string,
    password: string
  }> = new EventEmitter<{
    email: string,
    password: string
  }>();

  public event = new Event("build");

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {

  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('changes mf', changes)

    if('form' in changes) {
      this.authForm.setValue((changes.form as any).currentValue);
    }
  }

  saveInRoot(event: Event): void {
    
    const payload = this.submit()

    const submitEvent = new CustomEvent("same", {
      detail: payload,
    });
    event.target?.dispatchEvent(submitEvent)
  }

  submit(): {
    email: string,
    password: string
  } | void {
    if(this.authForm.valid) {
      this.submitClick.emit(this.authForm.value as {
        email: string,
        password: string
      });
      console.log(this.authForm.value, 'in mf');
      return this.authForm.value as {
        email: string,
        password: string
      }
    }
  }
}