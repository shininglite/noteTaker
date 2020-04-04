// ===============================================================================
// htmlRoutes from hot restaurant, modified
// this file should be complete and correct, as currently modified 4/22/20
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/notes", function(req, res) {
  // sends notes.html back to client
  // res.sendFile(path.join(__dirname, "../public/notes.html"));
  // });
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home, which is index.html
  app.get("*", function(req, res) {
    // sends index.html back to client
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
