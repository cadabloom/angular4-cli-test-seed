import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { PrototypeService } from "app/prototype/shared/prototype.service";

@NgModule({
  declarations: [
    AppComponent,
    PrototypeComponent,
    HomeComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PrototypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
