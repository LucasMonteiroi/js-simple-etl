
const mongoose = require('mongoose');

const Etl = new mongoose.Schema({
    typeFrom: {
        type: String,
        required: true,
    },
    dataToAccess: {
        type: mongoose.SchemaTypes.Mixed,
        required: true,
    },
    dataAccess: {
        type: mongoose.SchemaTypes.Mixed,
        required: true,
    },
    dataFrom: {
        type: mongoose.SchemaTypes.Mixed,
        required: true,
    },
    typeTo: {
        type: String,
        required: true,
    },
    dataTo: {
        type: mongoose.SchemaTypes.Mixed,
        required: true,
    },
    useBearerAuth: {
        type: Boolean,
        required: true,
    },
    bearerData: {
        api: {
          type: String,
          required: false,
        },
        login: {
          type: String,
          required: false,
        },
        password: {
          type: String,
          required: false,
        }
    }
});

module.exports = mongoose.model('Etl', Etl);
