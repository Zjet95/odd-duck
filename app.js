'use strict'

// ****Globals****

// Its always good practice to run a console log at the beggining to ensure everything is aligning!
console.log('Hello Zach')
// empty array named picArray has been created to represent the variable that will be used to push our product variable along with their attributes, into.
let picArray = [];
// variable created to represent how many voting rounds there are going to be.
let votingRounds = 25;

//Creation Of DOM Windows, This is the entry way into creating elements through javascript that render to your HTML document. 

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');
let resultslist = document.getElementById('results-container');

//****CANVAS ELEMENT FOR GRID DEMO ***

let canvasElem = document.getElementById('chart');

