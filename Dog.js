var chalk = require('chalk');

function Dog (name) {
	this.name = name;
}

Dog.prototype.sayName = function () {
	console.log('My name is ' + chalk.red(this.name)); 
}

module.exports = Dog;