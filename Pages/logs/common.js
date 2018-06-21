function sayHello(name){
  console.log("Hello"+name);
}
var sayGoodBye= function(name){
  console.log('good bye ' + name);
}

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodBye;