import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from 'src/app/components/comp2/comp2.component';


@NgModule({
  declarations: [Comp2Component],
  imports: [CommonModule],
  entryComponents: [Comp2Module.rootComponent]
})
export class Comp2Module { 
  static rootComponent = Comp2Component;
}
