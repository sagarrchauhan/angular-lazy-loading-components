import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { MasterComponent } from './components/master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: ':root',
    component: MasterComponent
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
