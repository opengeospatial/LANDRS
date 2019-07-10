'use strict'

var vartemperaturestemperatureIdController = require('./temperaturestemperatureIdControllerService');

module.exports.showtemperaturebyid = function showtemperaturebyid(req, res, next) {
  vartemperaturestemperatureIdController.showtemperaturebyid(req.swagger.params, res, next);
};