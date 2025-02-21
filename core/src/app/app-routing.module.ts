import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MfWrapperComponent } from './mf-wrapper/mf-wrapper.component';

const routes: Routes = [
  {
    path: 'mf',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => {
        return m.AppFormsModule;
      }),
  },

  {
    path: 'mf-test',
    component: MfWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
