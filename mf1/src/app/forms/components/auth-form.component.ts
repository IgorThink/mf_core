import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnChanges {
  @Input() public form: {
    email: string;
    password: string;
  } = {} as any;
  @Input() public userName: string = 'Илья';

  @Input() public isRoot: boolean = false;
  public authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  public submitClick: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter<{
    email: string;
    password: string;
  }>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes mf', changes);

    if ('form' in changes) {
      this.authForm.setValue((changes['form'] as any).currentValue);
    }
  }

  saveInRoot(event: Event): void {
    const payload = this.submit();

    const submitEvent = new CustomEvent('same', {
      detail: payload,
    });
    event.target?.dispatchEvent(submitEvent);
  }

  submit(): {
    email: string;
    password: string;
  } | void {
    if (this.authForm.valid) {
      this.submitClick.emit(
        this.authForm.value as {
          email: string;
          password: string;
        }
      );
      console.log(this.authForm.value, 'in mf');
      return this.authForm.value as {
        email: string;
        password: string;
      };
    }
  }
}
