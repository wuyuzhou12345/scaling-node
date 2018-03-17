var counter1 = require('./util/counter');
var counter2 = require('./util/counter');

var test = require('./cat');
test.create('head');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());
counter1.hello();