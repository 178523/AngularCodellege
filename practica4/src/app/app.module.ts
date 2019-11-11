import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import {appRouting} from './app.routes';
import { StoreComponent } from './components/store/store.component';
import { AboutComponent } from './components/about/about.component';
import { InformacionProductoComponent } from './components/informacion-producto/informacion-producto.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoadingComponent,
    StoreComponent,
    AboutComponent,
    InformacionProductoComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
