// ===============================================================================
// api routes from hotrestaurant app, modified for note taker
// LOAD DATA
// We are linking our routes to a data source
// That holds json data
// ===============================================================================
// fs, file system, is part of node, so does need separate installation
// fs will likely be needed to write to the json database
var fs = require('fs'); 
// the application should have a db.json file on the backend that stores and retrieves notes using the fs module
var jsonDatabase = require("../db/db.json");
// var waitListData = require("../assets/dbs/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  // GET "api notes" should read the db.json file and return all notes saved as JSON
  app.get("/api/notes", function (req, res) {
    res.json(jsonDatabase);
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });


  // reference app as our instance of an express application to declare a POST route named '/api/tables
  // req and res are our objects that are populated via the express app.post method
  // TODO: post api notes should receive a new note to save on the request body, add it to the db.json file, then return (send) the new note to the client
  app.post("/api/notes", function (req, res) {
    
    // req.body is fed it's value via our middleware from server 
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    // req.body is an object containing the incoming data
    /*
    TODO: What does incoming data look like?
   Below is our incoming data that will feed the req.body object
   {
     customerName: 'Tom'
     phoneNumber: 555-555-5555
     customerEmail: tom@gmail.com
     customerID: 1
   };
    */
   // TODO: What gets pushed to the request body?
    tableData.push(req.body);
    // res is our response object
    /*
      Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

      The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
    */
    res.json({ message: 'A new note has been added.' });
    //TODO: add error handling
    // else {
    // waitListData.push(req.body);
    // res.json(false);
  });
}  

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!
// TODO: Worry about this
app.post("/api/clear", function (req, res) {
  // Empty out the arrays of data
  tableData.length = 0;
  waitListData.length = 0;

  res.json({ ok: true });
});

//TODO: study and fix this
// using app (our express instance) declare a delete on /api/tables/:customerId
// : - an express convention that allows to add placeholder parameters in our api route name declaration
// api/tables/1
app.delete('/api/tables/:customerId', (req, res) => {
  // dynamically reference the customerId
  const customerId = req.params.customerId;
  console.log(customerId);
  // TODO: Update the tableData array and remove the customer object where tableData[i].customerId === customerId
  // Hint: research .filter method
  // TODO: Remove the last customer object from the waitList array and add to the tableData array
  // Hint: research .pop() array method
  // TODO: Reference the phoneNumber in the customer object that is being seated and utilize twilio docs to send a text message to the users phone
  // TODO: send an appropiate respond back to the client
});