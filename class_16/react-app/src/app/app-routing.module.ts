import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RafiComponent } from './rafi/rafi.component';
import { JabedComponent } from './jabed/jabed.component';
import { ShoumoComponent } from './shoumo/shoumo.component';
import { ShoumitComponent } from './shoumit/shoumit.component';


const routes: Routes = [
  { path: 'first', component: RafiComponent },
  { path: 'second', component: JabedComponent },
  { path: 'third', component: ShoumoComponent },
  { path: 'fourth', component: ShoumitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
