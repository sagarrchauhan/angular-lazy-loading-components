import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../components/banner/banner.component';



@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  entryComponents: [BannerModule.rootComponent]
})
export class BannerModule { 
  static rootComponent = BannerComponent;
}
