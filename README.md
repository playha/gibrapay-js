# GibraPay JS

Official Node.js client library for the GibraPay API.

## Installation

```bash
npm install gibrapay-js
```

## Usage

### Initialize the Client

```javascript
const GibraPay = require('gibrapay-js');

// Initialize with API key
const gibrapay = new GibraPay('your-api-key');

// Initialize with API key and wallet ID
const gibrapay = new GibraPay('your-api-key', 'your-wallet-id');
```

### Wallet Operations

```javascript
const Wallet = require('gibrapay-js/lib/wallet');

// Create a wallet instance
const wallet = new Wallet('your-api-key', 'your-wallet-id');

// Get wallet details
const walletDetails = await wallet.get();

// Create a new wallet
const newWallet = await wallet.create({
  // wallet creation parameters
});
```

### Transaction Operations

```javascript
const Transactions = require('gibrapay-js/lib/transactions');

// Create a transactions instance
const transactions = new Transactions('your-api-key', 'your-wallet-id');

// Get all transactions for a wallet
const allTransactions = await transactions.get();

// Get a specific transaction
const transaction = await transactions.get('transaction-id');
```

### Transfer Operations

```javascript
const Transfer = require('gibrapay-js/lib/transfer');

// Create a transfer instance
const transfer = new Transfer('your-api-key', 'your-wallet-id', amount, phoneNumber);

// Execute the transfer
const result = await transfer.execute();
```

### Withdraw Operations

```javascript
const Withdraw = require('gibrapay-js/lib/withdraw');

// Create a withdraw instance
const withdraw = new Withdraw('your-api-key', 'your-wallet-id', amount, phoneNumber);

// Execute the withdrawal
const result = await withdraw.execute();
```

## Error Handling

The library throws errors with the following properties:
- `message`: Error message from the API or a generic message
- `code`: HTTP status code (for API errors)

## Dependencies

- axios: ^0.21.1

## License

MIT
