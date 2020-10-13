import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RafiComponent } from './rafi/rafi.component';
import { JabedComponent } from './jabed/jabed.component';
import { ShoumoComponent } from './shoumo/shoumo.component';
import { ShoumitComponent } from './shoumit/shoumit.component';

@NgModule({
  declarations: [
    AppComponent,
    RafiComponent,
    JabedComponent,
    ShoumoComponent,
    ShoumitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
