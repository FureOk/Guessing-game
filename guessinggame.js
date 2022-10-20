let username = prompt("What is your name?");
console.log(`Welcome to the Guessing Game, ${username}!`)

const minNum = 1;
let maxNum = 2;
let points = 0;

function guessTheNumber(theRange) {
  let userGuess = parseInt(prompt(`Guess a number in ${theRange}`));
  let randomNumber = Math.floor(Math.random() * theRange) + 1

  if (userGuess === randomNumber) {
    console.log(`Congratulations ${username}! You won! You can move on to the next stage!`)
    points ++;
    let count = 0
    for (i = 0; i > count; i++) {
      randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
      nextGuess = parseInt(prompt('Guess another number: '));
      if (randomNumber === nextGuess) {
            console.log(`Congratulations ${username}! You won! You can move on to the next stage!`)
            points++;
      } else {
        console.log("Looks like you lost :( Try again.")
      }
  }
}
}

guessTheNumber(theRange)