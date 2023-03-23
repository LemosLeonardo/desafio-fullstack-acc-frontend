import { EnderecosModule } from './../enderecos/enderecos.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyAddComponent } from './company-add/company-add.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  declarations: [
    CompanyAddComponent,
    CompanyViewComponent,
    CompanyEditComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AppMaterialModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
    EnderecosModule
  ],
  providers: [
    provideNgxMask()
  ]
})
export class CompanyModule { }
