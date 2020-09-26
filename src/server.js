const express = require('express');
const debug = require('debug')('app:server');
const connect = require('debug')('app:connect');
const bodyParser = require('body-parser');

const config = require('./config/index');
const sequelize = require('./store/mysql');
const errors = require('./network/errors');

const app = express();

app.use(bodyParser.json());
const router = require('./network/routes');
router(app);

app.use(errors);

app.listen(config.app.port, () => {
  if (config.app.env === 'development') {
    debug(
      `Listening on ${config.app.serverHostDevelopment}:${config.app.port}, this is a development server`
    );
  } else {
    debug(
      `Listening on http://localhost:${config.app.port} this is a production server`
    );
  }

  sequelize
    .sync({ force: true })
    .then(() => {
      connect('Data base is connect!!!');
    })
    .catch((error) => {
      connect('There is a error with the data base connect', error);
    });
});
