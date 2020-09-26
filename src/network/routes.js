const apiRouter = require('../api/apiRoutes');
const user = require('../api/components/user/network');

const routes = (server) => {
  server.use('/', apiRouter);
  server.use('/users', user);
};

module.exports = routes;
