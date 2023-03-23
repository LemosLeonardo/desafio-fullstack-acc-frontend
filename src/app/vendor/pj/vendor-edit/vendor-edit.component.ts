import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecosService } from './../../../enderecos/enderecos.service';
import { VendorService } from './../../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {
  vendorPJ: any;
  endereco: any;
  idVendorPJ: any;

  form = this.formBuilder.group(
    {
      id: '',
      cnpj: '',
      nomeFantasia: '',
      dataAbertura: '',
      email: '',
      cep: '',
      uf: '',
      cidade: '',
      bairro: '',
      logradouro: '',
      numero: '',
      complemento: ''
    }
  );

  inputUf = false;
  inputCidade = false;
  inputBairro = false;
  inputLogradouro = false;

  constructor(
    private formBuilder: FormBuilder,
    private vendorService: VendorService,
    private enderecosService: EnderecosService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(
      params => this.idVendorPJ = params['id']);
  }

  ngOnInit(): void {
    this.getVendor(this.idVendorPJ);
  }

  onSubmit() {
    this.vendorService.savePJ(this.form.value)
      .subscribe(data => {
        this.vendorPJ = data,
          this.showSnackBar("Fornecedor atualizado com sucesso!")
      });
  }

  onDelete(id: string) {
    this.vendorService.deletePJ(id).subscribe();
    this.showSnackBar("Fornecedor deletado com sucesso!");
    this.router.navigate(['/fornecedores'], { skipLocationChange: false });
  }


  getVendor(id: any) {
    this.vendorService.getPJById(id)
      .subscribe(
        data => { this.vendorPJ = data, this.updateForm(this.vendorPJ) });
  }

  updateForm(vendor: any) {
    this.form.setValue({
      id: vendor.id,
      cnpj: vendor.cnpj,
      nomeFantasia: vendor.nomeFantasia,
      dataAbertura: vendor.dataAbertura,
      email: vendor.email,
      cep: vendor.cep,
      uf: vendor.uf,
      cidade: vendor.cidade,
      bairro: vendor.bairro,
      logradouro: vendor.logradouro,
      numero: vendor.numero,
      complemento: vendor.complemento
    })
  }

  getEnderecoPorCEP() {
    const cep = this.form.value.cep;
    if (cep?.length == 8 && cep != '') {
      this.enderecosService.searchCEP(cep)
        .subscribe(data => {
          this.endereco = data,
            this.updateEndereco(this.endereco)
        })
    }
  }

  updateEndereco(endereco: any) {
    var formData: any = this.form.value;

    this.form.setValue({
      id: formData.id,
      cnpj: formData.cnpj,
      nomeFantasia: formData.nomeFantasia,
      dataAbertura: formData.dataAbertura,
      email: formData.email,
      cep: endereco.cep,
      uf: endereco.uf,
      cidade: endereco.cidade,
      bairro: endereco.bairro,
      logradouro: endereco.logradouro,
      numero: formData.numero,
      complemento: formData.complemento
    })

    this.changeToReadOnly()
  }

  changeToReadOnly() {
    this.inputUf = true;
    this.inputCidade = true;
    this.inputBairro = true;
    this.inputLogradouro = true;
  }

  private showSnackBar(param: string) {
    this._snackBar.open(
      param,
      "",
      { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top' })
  }
}
