import { CompanyAddComponent } from './company-add/company-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {
    path: 'empresas',
    component: CompanyListComponent
  },
  {
    path: 'empresa/adicionar',
    component: CompanyAddComponent
  },
  {
    path: 'empresa/:id',
    component: CompanyViewComponent
  },
  {
    path: 'empresa/editar/:id',
    component: CompanyEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
