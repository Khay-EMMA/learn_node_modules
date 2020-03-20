const EventEmmiter = require("events");

const emmiter = new EventEmmiter();
//Register an event
emmiter.on("messageLogged", arg => {
  //do something when an event is raised
  console.log("event is logged", arg);
});
//Raise an event
emmiter.emit("messageLogged", { id: 1, url: "https://" });
