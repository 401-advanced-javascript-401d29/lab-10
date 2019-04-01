'use strict';

/**
 * Books Model
 * @module models/books-model.js
 */

const Model = require('../mongo-model.js');
const schema = require('./books-schema.js');

console.log('onward to books');

class Books extends Model {}
/**
 * Gives access to the mongo-model functions and classes
 * @param  {object} schema
 */
console.log(module.exports = new Books(schema), 'hello')
module.exports = new Books(schema);

