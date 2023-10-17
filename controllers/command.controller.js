const CommModel = require('../models/command.model');

exports.insert = (req, res) => {
    CommModel.setComm(req.body);
    res.status(201).send("received");
};
