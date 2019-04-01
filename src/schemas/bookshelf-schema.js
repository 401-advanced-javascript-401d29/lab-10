'use strict';

const books = require('../book-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

/**
 * Provides a mechanism to pull object data from other modules into the bookshelves schema
 * @param  {object}} with parameters
 */
const bookshelves = mongoose.Schema({
  bookshelf: { type: String, required: true },
}, { toObject:{virtuals:true }, toJSON:{ virtuals:true } });

/**
 * Defines the properties to push from the bookshelves collection into the books collection
 * @param  {collection} 'players'
 */
bookshelves.virtual('books', {
  ref: 'books',
  localField: 'bookshelf',
  foreignField: 'bookshelf',
  justOne: false,
});

/**
 * Populates the bookshelves collection with books before the data is returned after a request
 * @param  {method} 'find'
 */

bookshelves.pre('find', function() {
  try {
    this.populate('players');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

/**
 * Exports the teams schema
 * @param  {schema} teams
 */
module.exports = mongoose.model('bookshelves', bookshelves);
