const axios = require('axios');
class AuthService {
  async getToken() {
    const address = process.env.AUTH_API;

    const bodyRequest = {
      userName: process.env.TOKEN_USER,
      userPassword: process.env.TOKEN_PASSWORD,
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
