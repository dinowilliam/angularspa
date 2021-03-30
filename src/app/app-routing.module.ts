import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './core/error404/error404.component';
import { HomeComponent } from './core/home/home.component';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
