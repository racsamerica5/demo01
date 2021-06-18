import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertirComponent } from './convertir/convertir.component';
import { ConversionComponent } from './conversion/conversion.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './suma/suma.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertirComponent,
    ConversionComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
