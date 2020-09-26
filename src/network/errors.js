const error = require('debug')('app:error');
const response = require('./response');

const errors = (err, req, res, next) => {
	error('[error]', err);
	const message = err.message || 'Internal Error';
	const status = err.statusCode || 500;

	response.error(req, res, message, status);
	next();
};

module.exports = errors;
