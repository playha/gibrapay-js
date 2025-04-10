const GibraPay = require('./index');

class Wallet extends GibraPay {
  constructor(apiKey, walletId = null) {
    super(apiKey, walletId);
  }

  async get() {
    return this.makeRequest('GET', `/wallet/${this.walletId}`);
  }

  async create(data) {
    return this.makeRequest('POST', '/wallet', data);
  }
}

module.exports = Wallet;
