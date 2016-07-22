//Starter Code From LearnDot
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){ 
	var dictArray = [[],[],[],[],[],[],[]];   
   	var lines = data.toString().split("\n"),
       lineSplit
   	lines.forEach(function(line){    
    	lineSplit = line.split("  ");
    	if (lineSplit[1]) {
    		if (lineSplit[0].match(/^[a-zA-Z]+$/)) {
    			if (lineSplit[1].match(/\d/g)) {
    				var numSyllables = lineSplit[1].match(/\d/g).length;
    				if (numSyllables > 0 && numSyllables < 8) {
    					dictArray[numSyllables-1].push(lineSplit[0]);    		
    				}    		
    			}
    		}	
    	}

  	});
  	return dictArray;
}



module.exports = formatData(cmudictFile);