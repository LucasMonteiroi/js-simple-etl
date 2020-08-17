const sql = require('mssql');

class DatabaseService {
	async getData(connectionConfig, query) {
		// Todo: connectionConfig is a object with this properties: user, password, server, database
		return sql
			.connect(connectionConfig)
			.then((pool) => {
				return pool.request().query(query);
			})
			.then((result) => {
				return result.recordsets[0];
			})
			.catch((err) => {
				throw err;
			});
	}
}

module.exports = new DatabaseService();
