let username = prompt("What is your name?");
console.log(`Welcome to the Guessing Game, ${username}!`)

const minNum = 1;
let maxNum = 2;

function theRange(minNum, maxNum) {
    let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    return randomNumber;
  };

function guessTheNumber(theRange) {
  console.log("You have a total of 5 lives.")
  let userGuess = parseInt(prompt(`Guess a number in ${theRange}`));
  let points = 0;
  let count = 5;
  for(let i = 0; i < count; count ++) {
    if (userGuess === randomNumber) {
      console.log(`Congratulations ${username}! You won! You can move on to the next stage!`);
      points++;
    } else {
      console.log("Looks like you lost :( Try again.");
    }
  }
  console.log(`You have a total of ${points} points!`)
};

guessTheNumber(theRange);
