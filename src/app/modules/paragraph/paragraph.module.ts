import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';


@NgModule({
  declarations: [ParagraphComponent],
  imports: [CommonModule],
  entryComponents: [ParagraphModule.rootComponent]
})
export class ParagraphModule { 
  static rootComponent = ParagraphComponent;
}
