const axios = require('axios');
class AuthService {
  async getToken(bearerData) {
    const bodyRequest = {
      userName: bearerData.user,
      userPassword: bearerData.password,
    };

    return axios
      .post(bearerData.address, bodyRequest)
      .then((response) => {
        return response.data.token;
      })
      .catch((error) => {
        throw error;
      });
  }
}

module.exports = new AuthService();
