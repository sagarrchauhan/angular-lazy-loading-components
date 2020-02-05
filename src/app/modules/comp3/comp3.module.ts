import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp3Component } from 'src/app/components/comp3/comp3.component';
import { Comp3SubComponent } from 'src/app/components/comp3-sub/comp3-sub.component';



@NgModule({
  declarations: [Comp3Component, Comp3SubComponent],
  imports: [CommonModule],
  entryComponents: [Comp3Module.rootComponent]
})
export class Comp3Module { 
  static rootComponent = Comp3Component;
}
