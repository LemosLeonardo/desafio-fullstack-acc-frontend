import { VendorAddComponent as VendorPJAddComponent } from './pj/vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorViewComponent as VendorPJViewComponent } from './pj/vendor-view/vendor-view.component';
import { VendorEditComponent as VendorPJEditComponent } from './pj/vendor-edit/vendor-edit.component';

const routes: Routes = [
  {
    path: 'fornecedores',
    component: VendorListComponent
  },
  {
    path: 'fornecedor/adicionar',
    component: VendorAddComponent
  },
  {
    path: 'fornecedor/pj/adicionar',
    component: VendorPJAddComponent
  },
  {
    path: 'fornecedor/pj/:id',
    component: VendorPJViewComponent
  },
  {
    path: 'fornecedor/pj/editar/:id',
    component: VendorPJEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
