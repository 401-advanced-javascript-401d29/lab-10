'use strict';

const Model = require('../mongo-model.js');
const schema = require('./bookshelf-schema.js');

/**
 * Class that uses the methods from the model
 */
class Bookshelf extends Model {}
/**
 * Exports the bookshelf model
 * @param  {object} schema
 */
module.exports = new Bookshelf(schema);

