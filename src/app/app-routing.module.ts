import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { MasterComponent } from './components/master/master.component';

const routes: Routes = [
  { path: '', component: MasterComponent, pathMatch: 'full'},
  { path: ':root', component: MasterComponent },
  { path: ':root/:page', component: MasterComponent },
  { path: ':root/:page/:subpage', component: MasterComponent },
  { path: 'error', component: ErrorComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
