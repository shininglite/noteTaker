// noteTaker application, server.js file
// this is boilerplate server from hot restaurant app, no changes needed
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
// if a port is already set in process.env environment variable, use that
// otherwise, use port 8080
var PORT = process.env.PORT || 3000;
// var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// this is middleware that parses the client request and extends express' functionality to include the ability of the server code to handle json formatted data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
