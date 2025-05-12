const GibraPay = require('./index');

class Withdraw extends GibraPay {
  constructor(apiKey, walletId, amount, numberPhone) {
    super(apiKey, walletId);
    this.amount = amount;
    this.numberPhone = numberPhone;
  }

  async execute() {
    const data = {
      wallet_id: this.walletId,
      amount: this.amount,
      number_phone: this.numberPhone
    };
    
    return this.makeRequest('POST', '/withdraw', data);
  }
}

module.exports = Withdraw;
