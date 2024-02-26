import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { EventInfoComponent } from './event-info/event-info.component';
@NgModule({
  
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
    EventInfoComponent,
    MatDialogModule
  ],
  bootstrap: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }