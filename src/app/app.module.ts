import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorModule } from './vendor/vendor.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { AppMaterialModule } from './shared/app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    AppMaterialModule,
    CompanyModule,
    VendorModule,
    EnderecosModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
