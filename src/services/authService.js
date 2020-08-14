const axios = require('axios');
class AuthService {
  async getToken() {
    const address = this.process.env.AUTH_API;

    const bodyRequest = {
      userName: this.process.env.TOKEN_USER,
      userPassword: this.process.env.TOKEN_PASSWORD,
    };

    return axios
      .post(address, bodyRequest)
      .then((response) => {
        return response.data.token;
      })
      .catch((error) => {
        throw error;
      });
  }
}

module.exports = new AuthService();
