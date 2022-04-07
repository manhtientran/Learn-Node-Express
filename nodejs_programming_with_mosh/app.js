// function sayHello(name) {
//   console.log("hello" + name);
// }

// sayHello("Manh");

// Global object
// console.log();

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// In browser
// window.console.log
// window.setTimeout

// In Node.js, we have "global" object

// var message = "";
// console.log(global.message); // undefined

// ========================================

// var logger = require("./logger");

// console.log(logger);

// console.log(module);

// logger.log("Manh");

// ========================================
// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// ========================================
const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(totalMemory);
// console.log(freeMemory);

// ========================================
const fs = require("fs");

const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log(files);
// });

// ========================================
const EventEmitter = require("events");

// Register a listener

// Raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://google.com" });

const Logger = require("./logger");
const logger = new Logger();

console.log(logger.on);

logger.on("messageLogged", function (arg) {
  console.log("Listener called");
  console.log(arg["url"]);
});

logger.log("message");
