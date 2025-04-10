const GibraPay = require('./index');

class Transactions extends GibraPay {
  constructor(apiKey, walletId) {
    super(apiKey, walletId);
  }

  async get(transactionId = null) {
    let endpoint = '/v1/transactions';
    if (transactionId) {
      endpoint += `/${transactionId}`;
    } else {
      return this.makeRequest('GET', endpoint, { wallet_id: this.walletId });
    }
    
    return this.makeRequest('GET', endpoint);
  }
}

module.exports = Transactions;