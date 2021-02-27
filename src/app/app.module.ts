import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModunoModule } from './mods/uno/moduno.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModunoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
