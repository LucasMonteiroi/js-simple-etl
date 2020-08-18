const etlSchema = require('../schemas/Etl');
const workerLoader = require('../loaders/workerLoader');

class EtlController {
  async bulkInsert(req, res) {
    const bulkData = req.body;
    const createdItems = [];
    bulkData.map((item) => {
      etlSchema
        .create({
          typeFrom: item.typeFrom,
          dataAccess: item.dataAccess,
          dataToAccess: item.dataToAccess,
          dataFrom: item.dataFrom,
          typeTo: item.typeTo,
          dataTo: item.dataTo,
          useBearerAuth: item.useBearerAuth,
          bearerData: item.bearerData ? item.bearerData : undefined,
        })
        .then((created) => {
          createdItems.push(created);
        });
    });

    return res.json({ createdItems: createdItems });
  }

  async create(req, res) {
    const {
      typeFrom,
      dataAccess,
      dataToAccess,
      dataFrom,
      typeTo,
      dataTo,
      useBearerAuth,
      bearerData,
    } = req.body;
    const createdItem = await etlSchema.create({
      typeFrom,
      dataAccess,
      dataToAccess,
      dataFrom,
      typeTo,
      dataTo,
      useBearerAuth,
      bearerData,
    });
    return res.json({ createdItem });
  }

  async update(req, res) {
    const id = req.params.id;
    const {
      typeFrom,
      dataAccess,
      dataToAccess,
      dataFrom,
      typeTo,
      dataTo,
      useBearerAuth,
      bearerData,
    } = req.body;
    const data = await etlSchema.findById(id);
    const updatedData = await data.updateOne({
      typeFrom,
      dataAccess,
      dataToAccess,
      dataFrom,
      typeTo,
      dataTo,
      useBearerAuth,
      bearerData,
    });

    return res.json(updatedData);
  }

  async getAll(req, res) {
    const data = await etlSchema.find();
    return res.json({ count: data.length, data });
  }

  async getById(req, res) {
    const id = req.params.id;
    const data = await etlSchema.findById(id);
    return res.json({ data });
  }

  async delete(req, res) {
    const id = req.params.id;
    const data = await etlSchema.findById(id);
    const deleted = data.deleteOne();
    return res.json({ deleted });
  }

  async run(req, res) {
    const id = req.params.id;
    const selectedColumns = req.body;
    const data = await etlSchema.findById(id);
    const result = await workerLoader.run(data, selectedColumns);
    return res.json({result});
  }
}

module.exports = new EtlController();