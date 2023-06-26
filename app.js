/*	

First we need an empty string to store everything in.

They come in this format: 
Thomas Williams--240
Antwan Myles jr--155

i will need to add track meet names, ---, and scores to the string.

i will need to separate the names from the --

i will need to separate the numbers from the --

i will need to make sure that each name has the correct number associated with it.

i will need to display this data in the way i want 

i will need to save this data to match up against new track meet scores in the future. 




*/

// split the \n 
let week3BSplit = week3B.split('\n');
let newWeek3B = []
for ( let array in week3BSplit ) {
	let newWeek = week3BSplit[array].split('--')
	newWeek3B.push(newWeek);
}

// create a class constructor 
class Bloomer {
	constructor (name, score) {
		this.name = name;
		this['week3B score'] = score;
	}
}

// Give info to constructor
let bloomer = [];

// function to create bloomer instance for every person in track meet challenge. 
function createBloomers () {
	for (let i = 1; i < newWeek3B.length - 1; i++) {
		bloomer[i - 1] = new Bloomer( newWeek3B[i][0], newWeek3B[i][1] )
		
	}
}

// runs the function
createBloomers();

// big list that holds all bloomers that were constructed
const allBloomers = {
	1: bloomer[0]
};

// function to add all bloomers to the the all Bloomers object
function addToAllBloomers () {
	for (let i = 0; i < bloomer.length; i++) {
		allBloomers[i] = bloomer[i];
	}
}

// runs the function 
addToAllBloomers()


// example of how to log info 
console.log(allBloomers[1].name, allBloomers[1]['week3B score'])


// if bloomer name is === bloomer name update that bloomers week scores
if (allBloomers[1].name === 'Aidan Au') {
	allBloomers[1]['week test'] = 'test'
	console.log(allBloomers[1])
}


