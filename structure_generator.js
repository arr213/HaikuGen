//Structure Generator outputs an array of syllables that will form a correct haiku


function genStructure() {
	structure = [];
	lineNum = 1;
	sylTotal = 0;
	while (lineNum == 1) {
		sylMax = 5;
		addWords();
	}
	while (lineNum == 2) {
		sylMax = 12;
		addWords();
	}
		while (lineNum == 3) {
		sylMax = 17;
		addWords();
	}
	structure.pop();
	return structure;
};

function addWords() {
	if (sylTotal < sylMax) {
		var newWord = Math.floor(Math.random()*(sylMax - sylTotal)) + 1;
		structure.push(newWord);
		sylTotal += newWord;
	} else {
		structure.push('\n');
		lineNum++;
	}
};

myArray = genStructure();

module.exports = myArray;