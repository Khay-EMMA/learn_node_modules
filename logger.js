const EventEmmiter = require("events");
const url = "https://";
class Logger extends EventEmmiter {
  log = message => {
    //send http request
    console.log(message);
    //Raise an event
    this.emit("messageLogged", { id: 1, url });
  };
}

module.exports = Logger;
