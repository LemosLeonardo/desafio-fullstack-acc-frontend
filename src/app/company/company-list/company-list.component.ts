import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from './../company.service';
import { Observable, catchError, of } from 'rxjs';
import { Component } from '@angular/core';
import { Company } from '../model/company';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  company$: Observable<Company[]>;

  readonly displayedColumns = ['nomeFantasia', 'cnpj', 'acoes'];

  constructor(
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {
    this.company$ = this.companyService.getAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar lista de empresas');
          return of([])
        })
      )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
