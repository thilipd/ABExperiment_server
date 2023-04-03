const express = require('express');
const middleware = require('./middleware');
const router = require('./routes/index');
const { config } = require('dotenv');
const { resolve } = require('path');


const app = express();

config({ path: resolve(__dirname, '../.env') });

middleware(app);
router(app);

module.exports = app;

