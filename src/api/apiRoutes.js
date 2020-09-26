const express = require('express');
const router = express.Router();
const response = require('../network/response');
const config = require('../config/index');

let message = [];

if (config.app.env === 'development') {
  message = [
    {
      user: `${config.app.serverHostDevelopment}:${config.app.port}/users`,
    },
  ];
} else {
  message = [
    {
      user: `${config.app.serverHostProduction}/users`,
    },
  ];
}

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;
