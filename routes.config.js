const MeasController = require('./controllers/measurement.controller');
const OutCommController = require('./controllers/command.controller.js');

const config = require('./common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/meas', [
        MeasController.insert
    ]);
    app.post('/setComm', [
	OutCommController.insert
    ]);
 
    app.get('/getMeas', [
	MeasController.list
    ]);

};


