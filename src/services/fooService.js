const requestService = require('./requestService');

class FooService {
    async bulkData(data, useAuth = true) {
        const address = this.process.env.FOO_API;
        return await requestService.makeRequest('post', address, data, useAuth);
    }
}

module.exports = new FooService();