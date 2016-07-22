//HAIKU GENERATOR

//Import module containing function to create haiku.
var haiku = require('./haiku');

//Import module creating randomized syllable structure and associated line breaks.
var structure_generator = require('./structure_generator');
haiku.createHaiku(structure_generator);
