const EventEmmiter = require("events");

const emmiter = new EventEmmiter();
//Register an event
emmiter.on("messageLogged", function() {
  //do something when an event is raised
  console.log("event is logged");
});
//Raise an event
emmiter.emit("messageLogged");
