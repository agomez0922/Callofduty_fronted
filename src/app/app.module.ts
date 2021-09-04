import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { AboutComponent } from './components/about/about.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { Error404Component } from './components/error404/error404.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { FooterComponent } from './tools/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    AboutComponent,
    NuevoComponent,
    Error404Component,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
