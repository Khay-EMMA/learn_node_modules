const fs = require("fs");

fs.readdir("./", function(err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

fs.readFile("app.js", function(errror, file) {
  if (errror) console.log("There is an error", errror);
  else console.log("Result", file);
});
