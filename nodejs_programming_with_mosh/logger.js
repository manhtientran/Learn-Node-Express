// function (exports, require, module, __filename, __dirname)

// console.log(__filename);
// console.log(__dirname);

// var url = "http://mylogger.io/log";

// function log(message) {
//   // Send an HTTP request
//   console.log(message);
// }

// module.exports.log = log;

const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
