import { VendorAddComponent } from './pf/vendor-add/vendor-add.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EnderecosModule } from './../enderecos/enderecos.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';

import { VendorAddComponent as VendorPJAddComponent } from './pj/vendor-add/vendor-add.component';
import { VendorEditComponent as VendorPJEditComponent } from './pj/vendor-edit/vendor-edit.component';
import { VendorViewComponent as VendorPJViewComponent } from './pj/vendor-view/vendor-view.component';
import { VendorAddComponent as VendorPFAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorEditComponent as VendorPFEditComponent } from './pf/vendor-edit/vendor-edit.component';
import { VendorViewComponent as VendorPFViewComponent } from './pf/vendor-view/vendor-view.component';


@NgModule({
  declarations: [
    VendorListComponent,
    VendorAddComponent,
    VendorPJViewComponent,
    VendorPJEditComponent,
    VendorPJAddComponent,
    VendorPFAddComponent,
    VendorPFEditComponent,
    VendorPFViewComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
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
export class VendorModule { }
