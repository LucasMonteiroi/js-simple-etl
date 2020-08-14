const axios = require('axios');
const authService = require('./authService');

class RequestService {
    getHeaders(useBearerAuth) {
        let headers = {};
        if (useBearerAuth) {
            headers = { Authorization: `Bearer ${authService.getToken()}` };
        }
            
        return headers;
    }

    async makeRequest(httpMethod, url, payload, useBearerAuth = true) {
        try {
            const { data } = await axios({
                method: httpMethod,
                url,
                data: payload,
                headers: this.getHeaders(useBearerAuth),
            });

            return data;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new RequestService();