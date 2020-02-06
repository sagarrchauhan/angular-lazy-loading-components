import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../components/link/link.component';



@NgModule({
  declarations: [LinkComponent],
  imports: [CommonModule],
  entryComponents: [LinkModule.rootComponent]
})
export class LinkModule { 
  static rootComponent = LinkComponent;
}
