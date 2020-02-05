import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from 'src/app/components/comp1/comp1.component';



@NgModule({
  declarations: [Comp1Component],
  imports: [CommonModule],
  entryComponents: [Comp1Module.rootComponent]
})
export class Comp1Module { 
  static rootComponent = Comp1Component;
}
