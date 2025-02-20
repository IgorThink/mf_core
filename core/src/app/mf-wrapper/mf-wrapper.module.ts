import { NgModule } from "@angular/core";
import { MfWrapperComponent } from "./mf-wrapper.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MfWrapperComponent],
  imports: [CommonModule],
  exports: [MfWrapperComponent]
})
export class MfWrapperModule {}