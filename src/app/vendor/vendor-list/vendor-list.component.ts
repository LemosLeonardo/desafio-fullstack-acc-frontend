import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { VendorService } from './../vendor.service';
import { Observable, catchError, of } from 'rxjs';
import { VendorPJ } from './../model/VendorPJ';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent {
  vendorsPJ$: Observable<VendorPJ[]>;
  readonly displayedColumns = ['nomeFantasia', 'cnpj', 'acoes'];

  constructor(
    private vendorService: VendorService,
    public dialog: MatDialog
  ) {
    this.vendorsPJ$ = this.vendorService.getAllPJ()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar lista de fornecedores');
          return of([]);
        })
      )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }
}
