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

// 5. Properties that aren't there
let myArray = [
	{name: 'Bob', job: 'Janitor'},
	{name: 'Sue', job: 'Lawyer', boss: 'Bob'},
	{name: 'Aragorn', job: 'King', boss: 'Bob'},
	{name: 'Dog', job: 'Bounty Hunter', boss: 'Bob'},
	{name: 'Kim K', job: 'Do nothing', boss: 'Bob'}
]

for (var key in myArray) {
	let person = myArray[key];
	if (person.boss) {
	console.log(`${person.job} ${person.name} reports to ${person.boss}`);
	} else {
	console.log(`${person.job} ${person.name} doesn't report to anyone`);
	}
}

// Cracking the code (old)
/*function decode(code) {
    switch (code.charAt(0)) {
        case 'a': return code.charAt(1);
        case 'b': return code.charAt(2);
        case 'c': return code.charAt(3);
        case 'd': return code.charAt(4);
        default: return ' ';
    };
}

function breakup(sentance) {
    let words = sentance.split(' ');
    let results = [];
    for(let i = 0; i < words.length; i++) {
        results.push(decode(words[i])); // why in block?
    }
    return results.join(''); 
}

breakup('craft block argon meter bells brown croon droop');
*/
// Cracking the code (new)

function decode(code) {
	let result = [];
   	let cipher = {
		a: 2,
		b: 3,
		c: 4,
		d: 5
    };

    let words = code.split(' ');
	let firstLetter, desiredIndex;
	const cipherKeys = Object.keys(cipher);
	for (let i=0; i<words.length; i++) {
		firstLetter = words[i][0];
		if(cipherKeys.includes(firstLetter)) {
		// 	if(words.indexOf(firstletter) > -1) { // old school way	
			desiredIndex = cipher[firstLetter]-1;
			result.push(words[i][desiredIndex]);
		} else {
			result.push(' ');
		}
	}
	return result.join('');

}

decode('craft block argon meter bells brown croon droop');

// 7. Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
	return {
		name, nickname, race, origin, attack, defense,
		describe() {
      		console.log(`${name} is a ${race} from ${origin}.`);
    	},

		evaluateFight(opp) {
			let x = 0, y = 0;
			if (this.attack > opp.defense) {
				console.log('hi');
				x = this.attack - opp.defense;
			}
			if (this.defense < opp.attack) {
				y = this.defense - opp.attack;
			}
			console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
		}
	}
}

const characters = [
	createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
	createCharacter('Bilbo Baggins ', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
	createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
	createCharacter("Aragorn son of Arathorn", 'aragorn', 'Man', 'Dunnedain', 6, 8),
	createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];


characters.push(createCharacter('Arwen', 'arwen', 'Elf', 'Woodland Realm', 9, 6));

characters.find(function(char){ return char.nickname === 'aragorn' }).describe();

let onlyHobbits = characters.filter(function(char){return char.race === 'Hobbit'});

let onlyHighAttack = characters.filter(function(char){return char.attack > 5});


// What if you wanted to equip a weapon for each character and change how they are described? 
// add weapon in createCharacter function as an individual string, add it as a key and add it to the describe function.