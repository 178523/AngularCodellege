import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ConstrasenaPipe } from './pipes/constrasena.pipe';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    ConstrasenaPipe,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
