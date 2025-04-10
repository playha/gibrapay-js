const GibraPay = require('./index');

class Wallet extends GibraPay {
  constructor(apiKey, walletId = null) {
    super(apiKey, walletId);
  }

  async get() {
    return this.makeRequest('GET', `/v1/wallet/${this.walletId}`);
  }

  async create(data) {
    return this.makeRequest('POST', '/v1/wallet', data);
  }
}

module.exports = Wallet;