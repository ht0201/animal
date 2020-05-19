var Dog = require('./Dog');
var Mouse = require('./Mouse');
var Cat = require('./Cat');

var dog = new Dog('Timo');
var mouse = new Mouse('Mickey');
var cat = new Cat('TOm');

try {
	cat.eat(dog);
}catch {
	console.log('Cat cannot eat dog')
}
console.log(cat);