import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaLibExampleModule } from 'projects/na-lib-example/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NaLibExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
