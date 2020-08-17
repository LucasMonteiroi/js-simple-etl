const axios = require('axios');
class AuthService {
  async getToken(address, user, password) {
    const bodyRequest = {
      userName: user,
      userPassword: password,
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
