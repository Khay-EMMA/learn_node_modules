const Logger = require("./logger");
const logger = new Logger();
//Register an event
logger.on("messageLogged", arg => {
  //do something when an event is raised
  console.log("event is logged", arg);
});

logger.log("message");
