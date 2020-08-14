/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const querySql = fs.readFileSync(
  path.resolve(__dirname, '..', 'sql', 'query.sql'),
  'utf-8'
);
const fooService = require('../services/fooService');
const databaseConfig = require('../configs/db.config');

class FooLoader {
  async getDataFromDatabase() {
    const queryResult = await databaseConfig.getData(querySql);
    return queryResult;
  }

  async sendDataToDatabaseApi(data) {
    const result = await fooService.bulkData(data, false);
    return result;
  }

  async transformData(data) {
    const transformedData = data.map((foo) => {
      return {
        fooDescription: foo.description,
        fooName: foo.name,
      };
    });
    return transformedData;
  }

  async processLoader() {
    try {
      console.log('INFO: Executing FooService');
      const databaseData = await this.getDataFromDatabase();
      console.log('INFO: Get data with success.');
      console.log('INFO: Transforming data.');
      const data = await this.transformData(databaseData);
      console.log('INFO: Data Transformed successfully.');
      console.log('INFO: Sending data to REST API.');
      const apiResult = await this.sendDataToDatabaseApi(data);
      console.log('INFO: Data sent successfully.');
      return apiResult;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new FooLoader();