let url = "http://logger.io/log";
logger = message => {
  //send http request
  console.log(message);
};
module.export.log = log;
