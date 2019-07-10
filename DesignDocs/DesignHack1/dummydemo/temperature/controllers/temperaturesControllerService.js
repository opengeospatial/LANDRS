'use strict'
const mongoose = require('mongoose');
const uuid = require('uuid');

module.exports.listtemperatures = function listtemperatures(req, res, next) {
  res.send({
    message: 'This is the mockup controller for listtemperatures'
  });
};

module.exports.createtemperature = async function createtemperature(req, res, next) {
  await mongoose.connect('mongodb://localhost/admin', {
    useNewUrlParser: true,
    user: 'root',
    pass: 'example',
    dbName: 'test',
    auth: { admindb: 'admin' }
  });
  const tempSchema = new mongoose.Schema({
    id: String,
    value: Number,
    scale: String,
    date: { type: Date, default: Date.now }
  });
  const Temperature = mongoose.model('Temperature', tempSchema);
  const reading = new Temperature({
    id: uuid(),
    value: 13.1,
    scale: 'celsius'
  });
  /*res.send({
    "date": "2000-01-23T04:56:07.000Z",
    "scale": "celsius",
    "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "value": 18.4
  });*/
  const result = await reading.save();
  res.send(result.toString());
};
