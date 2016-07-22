//Haiku Generator

var fs = require('fs');
var dictArray = require('./dict_array');

function add(a, b) {
    return a + b;
};

function selectWord(num) {
	var randNum = Math.floor((Math.random() * dictArray[num-1].length) + 1);
	var randWord = dictArray[num-1][randNum];
	return randWord;
}

//create haiku
function createHaiku(structure){
	var haikuArray = [];
	for (var i = 0; i < structure.length; i++) {
		if(structure[i] == '\n') {
			haikuArray.push('\n');
		} else {
			haikuArray.push(selectWord(structure[i]) + ' ');	
		}
	}
	var haikuString = haikuArray.join('');
	console.log(haikuString);
};


module.exports = {
	selectWord: selectWord,
  	createHaiku: createHaiku,
};


