import { Injectable, InjectionToken, Type, Injector, NgModuleFactoryLoader, Inject, NgModuleFactory, ViewContainerRef, Compiler } from '@angular/core';
import { Dynamic } from '../../types/dynamic';

export interface LazyModules {
  [key: string]: {loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>};
}

export const lazyMap: LazyModules = {
  banner: {
    loadChildren: () => import('../../modules/banner/banner.module').then(m => m.BannerModule)
  },
  paragraph: {
    loadChildren: () => import('../../modules/paragraph/paragraph.module').then(m => m.ParagraphModule)
  },
  gallery: {
    loadChildren: () => import('../../modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  link: {
    loadChildren: () => import('../../modules/link/link.module').then(m => m.LinkModule)
  },
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});

export type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Injectable({
  providedIn: 'root'
})
export class LazyService {

  constructor(
    private injector: Injector,
    private compiler: Compiler,
    @Inject(LAZY_MODULES_MAP) private modulesMap: LazyModules
  ) {}

  async loadAndRenderComponents(data: any, container: ViewContainerRef) {
    container.clear();

    for await (const { type, data: componentData } of data.components) {
      let moduleOrFactory = await this.modulesMap[type].loadChildren();
      let moduleFactory;
      if (moduleOrFactory instanceof NgModuleFactory) {
        moduleFactory = moduleOrFactory;                // AOT
      }
      else {
        moduleFactory =  await this.compiler.compileModuleAsync(moduleOrFactory);   //JIT
      }
      const moduleRef = moduleFactory.create(this.injector);
      const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
        .rootComponent;
      const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(
        rootComponent
      );
      const componentRef = container.createComponent(factory);
      (componentRef.instance as Dynamic).data = componentData;
    }
  }
}
