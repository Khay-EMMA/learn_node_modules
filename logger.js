let url = "http://logger.io/log";
log = message => {
  //send http request
  console.log(message);
};
module.exports = log;
