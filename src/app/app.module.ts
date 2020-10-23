import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { LiveComponent } from './live/live.component';
import { HomeComponent } from './home/home.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgStreamingModule } from 'videogular2/compiled/streaming';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    LiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VgCoreModule,
    VgStreamingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
