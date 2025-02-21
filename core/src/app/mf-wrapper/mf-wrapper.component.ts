import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  AfterViewChecked,
  Injector,
  inject,
  InjectFlags,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'mf-wrapper',
  templateUrl: './mf-wrapper.component.html',
  styleUrls: ['./mf-wrapper.component.css'],
})
export class MfWrapperComponent implements OnInit, AfterViewChecked {
  @ViewChild('childContainer', { read: ViewContainerRef })
  childContainer!: ViewContainerRef;

  private form!: Element;
  private hasListener: boolean = false;
  private store = inject(StoreService);

  constructor(private injector: Injector) {
    this.loadChild(this.injector);
  }

  async loadChild(inj: Injector) {
    const { AuthFormComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    });

    const factory = inj
      .get(ComponentFactoryResolver)
      .resolveComponentFactory(AuthFormComponent as any);
    if (this.childContainer) {
      this.childContainer.clear();
    }
    const ref: ComponentRef<any> = this.childContainer.createComponent(
      factory,
      0,
      inj
    );

    this.store.formData.subscribe((data: any) => {
      ref.instance.form = data;
      ref.instance.isRoot = true;
    });
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    const el = document.querySelector('app-auth-form');

    if (el && !this.form) {
      this.form = el as Element;
    }
    if (document.getElementById('submitBtn') && !this.hasListener) {
      this.hasListener = true;
      document
        .getElementById('submitBtn')
        ?.addEventListener('same', (event: any) => {
          this.store.formData.next(event.detail);
        });
    }
  }
}
