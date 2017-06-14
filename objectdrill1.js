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

// 4. 