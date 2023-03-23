import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnderecosService } from './../enderecos.service';

@Component({
  selector: 'app-endereco-view',
  templateUrl: './endereco-view.component.html',
  styleUrls: ['./endereco-view.component.scss']
})
export class EnderecoViewComponent implements OnInit {
  id: any;
  endereco: any = [{
    // endereco: Endereco[] = [{
    id: '',
    cep: '',
    uf: '',
    cidade: '',
    bairro: '',
    logradouro: '',
    numero: '',
    complemento: ''
  }];

  constructor(
    private enderecosService: EnderecosService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.getEndereco(this.id)

  }

  getEndereco(id: string) {
    this.enderecosService.getById(id).subscribe(data => {
      this.endereco = data;
    })
  }

}
