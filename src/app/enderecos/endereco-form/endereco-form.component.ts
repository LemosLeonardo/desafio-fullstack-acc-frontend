import { MatSnackBar } from '@angular/material/snack-bar';
import { EnderecosService } from './../enderecos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {
  id: any;
  endereco: any;
  existsEndereco: boolean = false

  form = this.formBuilder.group({
    id: '',
    cep: '',
    uf: '',
    cidade: '',
    bairro: '',
    logradouro: '',
    numero: '',
    complemento: ''
  });

  inputUf = false;
  inputCidade = false;
  inputBairro = false;
  inputLogradouro = false;

  constructor(
    private formBuilder: FormBuilder,
    private enderecosService: EnderecosService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(param => { this.id = param['id'] });
  }

  ngOnInit(): void {
    this.verifyIfExists()
  }

  public getEnderecoPorCEP() {
    const cep = this.form.value.cep;
    if (cep?.length == 8 && cep != '') {
      this.enderecosService.searchCEP(cep)
        .subscribe(data => {
          this.endereco = data,
            this.updateForm(this.endereco)
        })
    }
  }

  updateForm(endereco: any) {
    this.form.setValue({
      id: this.id,
      cep: this.endereco.cep,
      uf: this.endereco.uf,
      cidade: this.endereco.cidade,
      bairro: this.endereco.bairro,
      logradouro: this.endereco.logradouro,
      numero: '',
      complemento: ''
    })
    this.changeToReadOnly()
  }

  changeToReadOnly() {
    this.inputUf = true;
    this.inputCidade = true;
    this.inputBairro = true;
    this.inputLogradouro = true;
  }

  verifyIfExists() {
    this.enderecosService.getById(this.id)
      .subscribe(data => {
        this.endereco = data;
        if (this.endereco.id) {
          this.existsEndereco = true;
          this.form.setValue({
            id: this.id,
            cep: this.endereco.cep,
            uf: this.endereco.uf,
            cidade: this.endereco.cidade,
            bairro: this.endereco.bairro,
            logradouro: this.endereco.logradouro,
            numero: this.endereco.numero,
            complemento: this.endereco.complemento
          })
        } else {
          this.existsEndereco = false;
        }
      })
  }

  onSubmit() {
    if (this.existsEndereco) {
      this.enderecosService.update(this.form.value).subscribe(data => { this.endereco = data, this.showSnackBar("Endereço atualizado com sucesso!") })
    } else {
      this.enderecosService.create(this.form.value).subscribe(data => { this.endereco = data, this.showSnackBar("Endereço adicionado com sucesso!") })
    }
  }

  private showSnackBar(param: string) {
    this._snackBar.open(
      param,
      "",
      { duration: 3000, horizontalPosition: 'center', verticalPosition: 'top' })
  }

}
