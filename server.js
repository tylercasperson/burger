require("dotenv").config();
var express = require("express");
var app = express();
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3304;

var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use('/', routes);
app.use(methodOverride('_method'))

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
