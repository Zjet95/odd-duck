'use strict'

// ****Globals****

// Its always good practice to run a console log at the beggining to ensure everything is aligning!
console.log('Hello Zach')
// empty array named picArray has been created to represent the variable that will be used to push our product variable along with their attributes, into.
let picArray = [];
// variable created to represent how many voting rounds there are going to be.
let votingRounds = 25;
let numberOfMatchupsAllowed = 0;

//Creation Of DOM Windows, This is the entry way into creating elements through javascript that render to your HTML document. 

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');
let resultslist = document.getElementById('results-container');

// ***** CONSTRUCTOR FUNCTION *****

function RandomImage(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;

}

// ***** HELPER FUNCTIONS / UTILITIES *****

function randomIndex() {
  return Math.floor(Math.random() * picArray.length);
}

function renderImg() {
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

  // Validation to make sure numbers are unique
  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }

  imgOne.src = picArray[imgOneIndex].img;
  imgTwo.src = picArray[imgTwoIndex].img;
  imgThree.src = picArray[imgThreeIndex].img;
  imgOne.title = picArray[imgOneIndex].name;
  imgOne.alt = `this is an image of ${picArray[imgOneIndex].name}`;
  imgTwo.title = picArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of ${picArray[imgTwoIndex].name}`;
  imgThree.title = picArray[imgThreeIndex].name;
  imgThree.alt = `this is an image of ${picArray[imgThreeIndex].name}`;

  picArray[imgTwoIndex].views++;
  picArray[imgThreeIndex].views++;
}

// ***** EVENT HANDLERS*****

function handleClick(event) {

  let imgClicked = event.target.title;
  console.dir(imgClicked);

  for (let i = 0; i < picArray.length; i++) {
    if (imgClicked === picArray[i].name) {
      picArray[i].votes++;
    }
  }

  votingRounds--;
  renderImg();
  if(votingRounds === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
  let stringifiedPictures = JSON.stringify(picArray);
  localStorage.setItem('myPictures', stringifiedPictures);
  console.log('Stringified data', stringifiedPictures);

}

function handleResults(){
  if(votingRounds === 0){
    for(let i = 0; i < picArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${picArray[i].name} - views: ${picArray[i].views} & votes: ${picArray[i].votes}`;
      resultslist.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleResults);
  }
}

// ***** EXECUTABLE CODE *****
let bag = new RandomImage('bag');
let banana = new RandomImage('banana');
let bathroom = new RandomImage('bathroom');
let boots = new RandomImage('boots');
let breakfast = new RandomImage('breakfast');
let bubblegum = new RandomImage('bubblegum');
let chair = new RandomImage('chair');
let cthulhu = new RandomImage('cthulhu');
let dogDuck = new RandomImage('dog-duck');
let dragon = new RandomImage('dragon');
let pen = new RandomImage('pen');
let petSweep = new RandomImage('pet-sweep');
let scissors = new RandomImage('scissors');
let shark = new RandomImage('shark');
let sweep = new RandomImage('sweep', 'png');
let tauntaun = new RandomImage('tauntaun');
let unicorn = new RandomImage('unicorn');
let waterCan = new RandomImage('water-can');
let wineGlass = new RandomImage('wine-glass');



picArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImg();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleResults);
