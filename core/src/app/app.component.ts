import { Component, HostBinding, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'core';
  public username = this.store.userName;

  constructor(
    private readonly router: Router,
    private readonly store: StoreService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public loadModule(): void {
    this.router.navigate(['mf-test/']);
  }

  public goHome(): void {
    this.router.navigate(['']);
  }
}
