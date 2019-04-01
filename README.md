![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================

## Book App v2

### Author: Erin Trainor ... collaborating Cory Henderson and Billy Bunn
### NOTE: Corey and I worked together getting the psql modularized and creating a book class that contained the methods. At that point we got stuck linking our class to our routes and collaborated with Billy to get the psql working (which is the majority of the psql side of the code in the repo). We split at the end of the day and I started trying to get the mongo working using the same/similar structure and creating the schemas. While I understand where we got to with Billy with the modularization I am finding it confusing to implement and track request/responses between handlers in order to use the same handlers with mongo... it is getting stuck in the middleware but that may be because of the mongoModel I am trying to pass it through. I plan to return to a less modularized version in the resubmit which may require partially starting from scratch. For this reason I have not added the modules and the UML as they will have to be significantly changed in the re-submit. Right now my mongo database returns an empty error object.

### Links and Resources
* [PR][https://github.com/401-advanced-javascript-401d29/lab-10/pull/2]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

<!-- #### Documentation
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
<!-- * [jsdoc][6] -->

### Modules
<!-- #### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
<!-- If you finished everything, you should be able to copy/paste the lab requirements and put them in present tense. -->
<!-- Usage Notes or examples -->

<!-- ###### `bar(array) -> array` -->
<!-- Usage Notes or examples --> -->

### Setup
#### `.env` requirements
* `npm i`
* `PORT` - 3000
* For Mongo
  * `MONGODB_URI` - mongodb://localhost:27017/books
  * `DB` - mongo
* For Postgres
  * `DATABASE_URL` - postgres://localhost:5432/books
  * `DB` - postgres


#### Running the app
* To run postgres
  * type psql in command line (must have psql installed)
  * CREATE DATABASE books
  * \q out of psql (should exit the database)
  * psql -d books -f data/schema.sql
    * returns message that tables were created
  * Alternatively - [Heroku Link](Pending)
* To run Mongo (not currently working)
  * Open 3 terminal tabs
    * First tab
      * mongod --dbpath=/Users/erintrainor/codefellows/data/db (substitute your file path)
    * Second tab
      * mongo
    * Third tab
      * nodemon
  * Alternatively - [Heroku Link](Pending)

#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
  * None yet
* What assertions need to be / should be made?
  * No tests have been written yet but need to test a mock database to check if get(), post(), put(), and delete() methods are working

#### UML
Note: I have the start of an image but it will significantly change so not including in this submission
