import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
