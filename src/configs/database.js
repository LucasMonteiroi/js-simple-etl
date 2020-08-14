const sql = require('mssql');

class DatabaseConnector {
	async getData(query) {
		const config = {
			user: this.process.env.DB_USER,
			password: this.process.env.DB_PASSWORD,
			server: this.process.env.DB_SERVER,
			database: this.process.env.DB_NAME,
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
