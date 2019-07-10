'use strict'

var vartemperaturesController = require('./temperaturesControllerService');

module.exports.listtemperatures = function listtemperatures(req, res, next) {
  vartemperaturesController.listtemperatures(req.swagger.params, res, next);
};

module.exports.createtemperature = function createtemperature(req, res, next) {
  vartemperaturesController.createtemperature(req.swagger.params, res, next);
};