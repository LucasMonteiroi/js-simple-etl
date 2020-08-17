const express = require('express');
const routes = express.Router();
const EtlController = require('./controllers/EtlController');

routes.get('/etl', async (req, res) => EtlController.getAll(req, res));
routes.get('/etl/:id', async (req, res) => EtlController.getById(req, res));
routes.post('/etl/bulk', async (req, res) => EtlController.bulkInsert(req, res));
routes.post('/etl', async (req, res) => EtlController.create(req, res));
routes.put('/etl/:id', async (req, res) => EtlController.update(req, res));
routes.put('/etl/run/:id', async (req, res) => EtlController.run(req, res));
routes.delete('/etl/:id', async (req, res) => EtlController.delete(req, res));

module.exports = routes; 