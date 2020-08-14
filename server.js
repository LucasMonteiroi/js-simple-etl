// eslint-disable-next-line no-undef
require('dotenv').config({path: __dirname + '/.env'});
const fooLoader = require('./src/loaders/fooLoader');

fooLoader.processLoader();