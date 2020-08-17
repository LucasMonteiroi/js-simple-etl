const databaseService = require('../services/databaseService');
//const requestService = require('../services/requestService');

class WorkerLoader {
  async run(etl) {
    if (etl.typeFrom == 'sql' && etl.typeTo == 'sql') {
      return await this.runFromSqlToSql(etl, etl.useBearerAuth);
    } else if (etl.typeFrom == 'sql' && etl.typeTo == 'rest') {
      return await this.runFromSqlToApi(etl, etl.useBearerAuth);
    } else if (etl.typeFrom == 'rest' && etl.typeTo == 'sql') {
      return await this.runFromApiToSql(etl, etl.useBearerAuth);
    } else if (etl.typeFrom == 'rest' && etl.typeTo == 'rest') {
      return await this.runFromApiToApi(etl, etl.useBearerAuth);
    }
  }

  async runFromSqlToSql(etl, useBearerAuth = false) {
    return {
      status: 'Running',
      description: 'Running from sql to sql',
      data: etl,
      useBearerToken: useBearerAuth,
      percent: 40,
    };
  }

  async runFromSqlToApi(etl, useBearerAuth = false) {
    const sqlResult = await databaseService.getData(
      etl.dataAccess,
      etl.dataFrom
    );
    const columns = sqlResult.map((item) => {
      return Object.getOwnPropertyNames(item);
    });
    const formattedReturns = [];
    Object.getOwnPropertyNames(etl.dataTo).map((item) => {
      return columns.map((column) => {
        return column.map((columnName) => {
          return formattedReturns.push(`${item}: ${sqlResult[0][columnName]}`);
        });
      });
    });

    return {
      status: 'Running',
      description: 'Running from sql to rest',
      useBearerToken: useBearerAuth,
      percent: 40,
      sqlResult,
      resultColumns: columns,
      etl,
      formattedReturns,
    };
  }

  async runFromApiToSql(etl, useBearerAuth = false) {
    return {
      status: 'Running',
      description: 'Running from rest to sql',
      data: etl,
      useBearerToken: useBearerAuth,
      percent: 40,
    };
  }

  async runFromApiToApi(etl, useBearerAuth = false) {
    return {
      status: 'Running',
      description: 'Running from rest to rest',
      data: etl,
      useBearerToken: useBearerAuth,
      percent: 40,
    };
  }
}

module.exports = new WorkerLoader();
