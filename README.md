
# Desafio Full-stack (Frontend)



## Stack utilizada

**Front-end:** Angular 2+ (15.2.0), Angular Material UI (15.2.0), Bootstrap 4.6 (apenas o sistema de grid)


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend
```

Entre no diretório do projeto

```bash
  cd desafio-fullstack-acc-frontend-master
```

Instale as dependências

```bash
  npm install
```

Importante
```
Recomendo que suba o backend antes de iniciar este servidor, pois a aplicação realiza conexão assim que fica disponível.
```

Inicie o servidor

```bash
  npm run start
```


# Demonstração

#### Página inicial - dashboard
```
URL: http://localhost:4200/
```

Exibe o número de referente à quantas empresas e fornecedores estão cadastrados.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/dashboard.png?raw=true)

# Empresas
### Página inicial
```
URL: http://localhost:4200/empresas
```
Exibe uma lista com todas as empresas cadastradas, e opções de visualizar e gerenciar (editar/excluir) cada uma.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/empresas-lista.png?raw=true)

### Adicionar empresa
```
URL http://localhost:4200/empresa/adicionar
```
Abre um formulário que permite realizar o cadastro das empresas.

Ao digitar o CEP e clicar na lupa, ele realizará uma consulta na API do http://cep.la/api e trará as informações do CEP referido.

Ao clicar em ``Salvar``, ele irá para a página de visualização da empresa adicionada.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/empresa-adicionar.png?raw=true)

### Visualizar empresa
```
URL: http://localhost:4200/empresa/id-da-empresa-adicionada
```
Nesta página, você verá as informações da empresa que acabou de adicionar.

Você também pode chegar nesta página clicando no ícone de olho, na página inicial das empresas.  

Os campos desta página são de ``apenas leitura``.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/empresas-visualizar.png?raw=true)

### Editar empresa
```
URL: http://localhost:4200/empresa/editar/id-da-empresa
```

Você pode acessar esta página clicando no botão ``Editar`` (imagem acima), ou clicando no ícone de engrenagem, na página inicial das empresas.

Aqui é possível alterar as informações da empresa e também excluir a empresa.

Ao Alterar o CEP, a aplicaçao fará uma consulta na API e retornará com os dados do CEP informado.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/empresas-editar-deletar.png?raw=true)


# Fornecedores
### Página inicial
```
URL: http://localhost:4200/fornecedores
```
Assim como a página inicial de empresas, esta página inicial também lista os fornecedores cadastrados.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/fornecedores-lista.png?raw=true)

### Adicionar fornecedor
```
URL: http://localhost:4200/fornecedor/adicionar
```
Abre um menu que permite escolher entre cadastrar uma ``Pessoa Jurídica`` ou ``Pessoa Física (em desenvolvimento)``

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/fornecedores-adicionar.png?raw=true)



### Adicionar fornecedor - Pessoa Jurídica
```
URL: http://localhost:4200/fornecedor/adicionar
```
Abre um formulário que permite realizar o cadastro de fornecedores.

Ao digitar o CEP e clicar na lupa, ele realizará uma consulta na API do http://cep.la/api e trará as informações do CEP referido.

Ao clicar em Salvar, ele irá para a página de visualização do fornecedor adicionado.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/fornecedores-lista.png?raw=true)

### Visualizar fornecedor
```
URL: http://localhost:4200/fornecedor/id-do-fornecedor-adicionado
```
Nesta página, você verá as informações da empresa que acabou de adicionar.

Você também pode chegar nesta página clicando no ícone de olho, na página inicial dos fornecedores.

Os campos desta página são de apenas leitura.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/fornecedores-visualizar-pj.png?raw=true)

### Editar fornecedor
```
URL: http://localhost:4200/fornecedor/editar/id-do-fornecedor-adicionado
```
Você pode acessar esta página clicando no botão Editar (imagem acima), ou clicando no ícone de engrenagem, na página inicial dos fornecedores.

Aqui é possível alterar as informações do fornecedor e também excluí-lo.

Ao Alterar o CEP, a aplicaçao fará uma consulta na API e retornará com os dados do CEP informado.

![App Screenshot](https://github.com/LemosLeonardo/desafio-fullstack-acc-frontend/blob/master/src/images/fornecedores-editar-deletar-pj.png?raw=true)


# Próximas Releases

- Adicionar relação empresa x fornecedor
- Validação de campos:
    - Se campos chaves já estão sendo utilizados (cnpj, cpf, rg e email);
    - Tornar campos obrigatórios
    - Abrir janela de confirmação antes de executar exclução de registro;
- Adicionar cadastro para fornecedor Pessoa Jurídica
    - Seguir validações propostas pelo desafio
- Implementar testes

# Melhorias
- Refatorar tipos any para o tipo específico e trechos de código redundante
- Melhorar a exibição do layout para dispositivos móveis
