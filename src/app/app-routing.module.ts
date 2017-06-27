import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PrototypeComponent } from 'app/prototype/prototype.component';
import { HomeComponent } from 'app/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {  
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'prototype', component: PrototypeComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
