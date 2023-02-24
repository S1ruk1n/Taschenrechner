import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatenbankComponent } from './datenbank/datenbank.component';
import { TaschenrechnerComponent } from './taschenrechner/taschenrechner.component';

@NgModule({
  declarations: [
    AppComponent,
    DatenbankComponent,
    TaschenrechnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
