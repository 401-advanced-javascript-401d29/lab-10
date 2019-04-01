'use strict';
console.log('found model-finder')
module.exports = (req, res, next) => {
  console.log('ran model finder!');
  const database = process.env.DB;
  console.log(database, 'the database');
  req.model = require(`../models/${database}-model.js`);
  console.log(req.model, 'this is the model being requested');
  next();
};

