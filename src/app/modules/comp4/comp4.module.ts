import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp4Component } from '../../components/comp4/comp4.component';


@NgModule({
  declarations: [Comp4Component],
  imports: [CommonModule],
  entryComponents: [Comp4Module.rootComponent]
})
export class Comp4Module { 
  static rootComponent = Comp4Component;
}
