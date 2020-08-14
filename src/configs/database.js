const sql = require('mssql');

class DatabaseConnector {
	async getData(query) {
		const config = {
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			server: process.env.DB_SERVER,
			database: process.env.DB_NAME,
		};

		return sql
			.connect(config)
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

module.exports = new DatabaseConnector();
