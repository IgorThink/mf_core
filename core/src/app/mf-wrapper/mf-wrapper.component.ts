import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'mf-wrapper',
  templateUrl: './mf-wrapper.component.html',
  styleUrls: ['./mf-wrapper.component.css'],
})
export class MfWrapperComponent {
  @ViewChild('childContainer', { read: ViewContainerRef })
  childContainer!: ViewContainerRef;

  private form!: Element;

  private hasListner: boolean = false;

  constructor(
    private cfr: ComponentFactoryResolver,
    private store: StoreService
  ) {}

  async loadChild() {
    let formsComponent;
    const data = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    }).then((data) => {
      formsComponent = data.FormComponent;
      return;
    });
    const factory = this.cfr.resolveComponentFactory(formsComponent as any);
    this.childContainer.clear();
    const ref: ComponentRef<any> = this.childContainer.createComponent(factory);
    this.store.formData.subscribe((data: any) => {
      ref.setInput('form', data);
      ref.setInput('isRoot', true);
    });
  }

  ngOnInit(): void {
    this.loadChild();
  }

  ngAfterViewChecked(): void {
    const el = document.querySelector('app-form');

    if (el && !this.form) {
      this.form = el as Element;
    }
    if (document.getElementById('submitBtn') && !this.hasListner) {
      this.hasListner = true;
      document
        .getElementById('submitBtn')
        ?.addEventListener('same', (event: any) => {
          this.store.formData.next(event.detail);
        });
    }
  }
}
