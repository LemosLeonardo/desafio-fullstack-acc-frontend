import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EnderecoViewComponent } from './endereco-view/endereco-view.component';
import { EnderecosRoutingModule } from './enderecos-routing.module';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';


@NgModule({
  declarations: [
    EnderecoViewComponent,
    EnderecoFormComponent
  ],
  imports: [
    EnderecosRoutingModule,
    CommonModule,
    AppMaterialModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    EnderecoViewComponent,
    EnderecoFormComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class EnderecosModule { }
