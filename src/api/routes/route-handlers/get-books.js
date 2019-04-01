'use strict';

// takes search results from a database and renders them to the client with ejs

module.exports = (request, response, next) => {
  // console.log(request.model.stuff('erin'), 'request.model in get-books');
  console.log('ran get-books.js');
  request.model.get()
    .then(results => {
      if (results.rows.rowCount === 0) {
        console.log('searching for book')
        response.render('pages/searches/new');
      } else {
        response.render('pages/index', { books: results.rows })
      }
    })
    .catch(error => {
      // console.log('getbooks error')
      response.render('pages/error', { error: error })
    });
}
