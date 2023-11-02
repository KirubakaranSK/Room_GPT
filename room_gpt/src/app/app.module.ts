import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


// ng prime

import { ButtonModule } from 'primeng/button';
import { Home1BodyComponent } from './home1-body/home1-body.component';
import { FooterComponent } from './footer/footer.component';
import { DreamComponent } from './dream/dream.component';
import { TryItComponent } from './try-it/try-it.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Home1BodyComponent,
    FooterComponent,
    DreamComponent,
    TryItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
