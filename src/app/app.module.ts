import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponentsModule, PageModules } from 'src/modules';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule,
    PageModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
