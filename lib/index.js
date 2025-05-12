const axios = require('axios');

class GibraPay {
  constructor(apiKey, walletId = null) {
    this.apiKey = apiKey;
    this.walletId = walletId;
    this.baseUrl = 'https://gibrapay.online/v1';
    
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'api-key': `${this.apiKey}`,
        'Accept': 'application/json'
      }
    });
  }

  async makeRequest(method, endpoint, data = {}) {
    try {
      let response;
      
      if (method === 'GET') {
        response = await this.client.get(endpoint, { params: data });
      } else {
        response = await this.client.post(endpoint, data);
      }
      
      return response.data;
    } catch (error) {
      if (error.response) {
        const err = new Error(error.response.data.message || 'A requisição a API falhou');
        err.code = error.response.status;
        throw err;
      } else {
        throw new Error('Erro de Rede');
      }
    }
  }
}

module.exports = GibraPay;
