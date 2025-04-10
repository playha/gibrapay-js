const GibraPay = require('./index');

class Withdraw extends GibraPay {
  constructor(apiKey, walletId, amount, phoneNumber) {
    super(apiKey, walletId);
    this.amount = amount;
    this.phoneNumber = phoneNumber;
  }

  async execute() {
    const data = {
      wallet_id: this.walletId,
      amount: this.amount,
      phone_number: this.phoneNumber
    };
    
    return this.makeRequest('POST', '/v1/withdraw', data);
  }
}

module.exports = Withdraw;