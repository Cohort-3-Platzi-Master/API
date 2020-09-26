const apiRouter = require('../api/apiRoutes');

const routes = (server) => {
  server.use('/', apiRouter);
};

module.exports = routes;
