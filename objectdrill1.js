// Object Drills gist

// 1. Object initializers and methods

let loaf = {
	flour: 300,
	water: 210,
	hydration: function() {
		return this.water/(this.flour*100);
	}
}

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

// 2. Iterating over an object's properties

const stuff = {
	foo: 'mud',
	bar: 'sand',
	fum: 'car',
	quux: 'lion',
	spam: 'food'
};

for (let key in stuff) {
	console.log(key, stuff[key]);
}

// 3. Arrays in objects

const myObj = {meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};

console.log(myObj.meals[3]);

// 4. Arrays of Objects
let myArray = [
	{name: 'Bob', job: 'Janitor'},
	{name: 'Sue', job: 'Lawyer'},
	{name: 'Aragorn', job: 'King'},
	{name: 'Dog', job: 'Bounty Hunter'},
	{name: 'Kim K', job: 'Do nothing'}
]

for (var key in myArray) {
	let person = myArray[key];
	console.log(`${person.name} ${person.job}`);
}