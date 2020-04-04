
// apiRoutes retrieves data from db.json file, or post to it, or delete from it
// const uuid = require('uuid/v4');
const data = require('../db/db.json');
const fs = require('fs');
const path = require('path');


module.exports = function (app) {
  
  // in the url, user request is to create, read, update or delete
  app.get("/api/notes", function (req, res) {
    // this is a read request, so return data in json format
    res.json(data);
  });

  app.post("/api/notes", function (req, res) {
    req.body.id = data.length;
    data.push(req.body);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {
      if (err) {
        return console.log(err);
      }
    });
    res.json({message: "You have created a new note."})
    // pushing data within req.body onto the array (db.json)

  });

  app.delete("/api/notes/:id", function (req, res) {
    // user will need to provide us with the id, create a variable for req.params.id
    // trash can icon link contains the unique identifier, passing the route
    // pull out the id and look through the data array for the matching id
    // look through the dataset, because you want to delete that specific note, 
    // filter out the specific id that you matched with
    data.splice(req.params.id, 1);

    for (var i = 0; i < data.length; i++){
      data[i].id =i;
    }

    //console.log(data);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(err) {
      if (err) {
        return console.log(err);
      }
    });
    // console.log("Success!");
    res.json({message: "You've deleted a note!"});
  })
};