// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

// console.log(typeof require("./7-mind-grenade"));
// console.log(require("./7-mind-grenade"));

// console.log(data);

// console.log(names);
// console.log(sayHi);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
