import { Injectable, InjectionToken, Type, Injector, NgModuleFactoryLoader, Inject, NgModuleFactory, ViewContainerRef } from '@angular/core';
import { Dynamic } from 'src/app/types/dynamic';


export const lazyMap: LazyModules = {
  comp1: 'src/app/modules/comp1/comp1.module#Comp1Module',
  comp2: 'src/app/modules/comp2/comp2.module#Comp2Module',
  comp3: 'src/app/modules/comp3/comp3.module#Comp3Module',
  comp4: 'src/app/modules/comp4/comp4.module#Comp4Module',
  link: 'src/app/modules/link/link.module#LinkModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});

export type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

export interface LazyModules {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class LazyService {

  constructor(
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap: LazyModules
  ) {}

  async loadAndRenderComponents(data: any, container: ViewContainerRef) {
    container.clear();

    for await (const { type, data: componentData } of data.components) {
      const moduleFactory: NgModuleFactory<any> = await this.loader.load(
        this.modulesMap[type]
      );
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
