# GibraPay JS

Biblioteca cliente oficial em Node.js para a API GibraPay.

## Instalação

```bash
npm install gibrapay-js
```

## Uso

### Inicializar o Cliente

```javascript
const GibraPay = require('gibrapay-js');

// Inicializar com chave API
const gibrapay = new GibraPay('sua-chave-api');

// Inicializar com chave API e ID da carteira
const gibrapay = new GibraPay('sua-chave-api', 'seu-id-carteira');
```

### Operações de Carteira

```javascript
const Wallet = require('gibrapay-js/lib/wallet');

// Criar uma instância de carteira
const wallet = new Wallet('sua-chave-api', 'seu-id-carteira');

// Obter detalhes da carteira
const detalhesCarteira = await wallet.get();
```

### Operações de Transações

```javascript
const Transactions = require('gibrapay-js/lib/transactions');

// Criar uma instância de transações
const transactions = new Transactions('sua-chave-api', 'seu-id-carteira');

// Obter todas as transações de uma carteira
const todasTransacoes = await transactions.get();
```

### Operações de Transferência

```javascript
const Transfer = require('gibrapay-js/lib/transfer');

// Criar uma instância de transferência
const transfer = new Transfer('sua-chave-api', 'seu-id-carteira', valor, numeroTelefone);

// Executar a transferência
const resultado = await transfer.execute();
```

### Operações de Saque

```javascript
const Withdraw = require('gibrapay-js/lib/withdraw');

// Criar uma instância de saque
const withdraw = new Withdraw('sua-chave-api', 'seu-id-carteira', valor, numeroTelefone);

// Executar o saque
const resultado = await withdraw.execute();
```

## Tratamento de Erros

A biblioteca lança erros com as seguintes propriedades:
- `message`: Mensagem de erro da API ou uma mensagem genérica
- `code`: Código de status HTTP (para erros da API)

## Dependências

- axios: ^0.21.1

## Licença

MIT
