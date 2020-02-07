import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { GalleryImageComponent } from '../../components/gallery-image/gallery-image.component';



@NgModule({
  declarations: [GalleryComponent, GalleryImageComponent],
  imports: [CommonModule],
  entryComponents: [GalleryModule.rootComponent]
})
export class GalleryModule { 
  static rootComponent = GalleryComponent;
}
