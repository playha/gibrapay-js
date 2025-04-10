const GibraPay = require('./index');

class Transfer extends GibraPay {
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
    
    return this.makeRequest('POST', '/transfer', data);
  }
}

module.exports = Transfer;
