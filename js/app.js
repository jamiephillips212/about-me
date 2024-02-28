'use strict';

let correctCount = 0;

function getName() {
  let usersName = prompt('Hey! What is your name?');
  
  while (usersName === null || usersName === '') {
    if (usersName === null) {
      usersName = confirm('Would you like to skip?') ? '' : prompt('Enter a name');
    } else {
      usersName = prompt('Enter a name');
    }
  }

  return usersName;
}

let usersName = getName();

alert(`Welcome, ${usersName}: Hit OK to begin the quiz!`);
alert('I am going to ask you several Yes or No questions. Hit OK when you are ready to begin.');

function getResponse() {
  const metResponse = prompt('Is my boyfriend the reason I keep going?');
  let lowercaseResponse = metResponse.toLowerCase();

  if (lowercaseResponse === 'no') {
    alert('Unfortunately, that is incorrect. Try again!');
  } else if (lowercaseResponse === 'yes') {
    alert('Correct! Great Job!');
    correctCount += 1;
  }
}

getResponse();

function colorAnswer() {
  const faveColor = prompt('Is red my favorite color?');
  let lowercaseColor = faveColor.toLowerCase();

  if (lowercaseColor === 'no') {
    alert('Unfortunately, you guessed wrong! Red is my favorite color!');
  } else if (lowercaseColor === 'yes') {
    alert('Correct! Good job!');
    correctCount += 1;
  }
}

colorAnswer();

function getTown() {
  const homeTown = prompt('Am I from OKC, OK?');
  let lowercaseTown = homeTown.toLowerCase();

  if (lowercaseTown === 'no') {
    alert('Incorrect! Try again.');
  } else if (lowercaseTown === 'yes') {
    alert('Wow! You got it right!');
    correctCount += 1;
  }
}

getTown();

function games() {
  const gamesResponse = prompt('Do I like games?');
  let lowercaseGames = gamesResponse.toLowerCase();

  if (lowercaseGames === 'no') {
    alert('Incorrect. I love games!');
  } else if (lowercaseGames === 'yes') {
    alert('Correct! Nice Going!');
    correctCount += 1;
  }
}

games();

function artist() {
  const artistResponse = prompt('Is keshi my favorite artist?');
  let lowercaseArtist = artistResponse.toLowerCase();

  if (lowercaseArtist === 'no') {
    alert('Wrong. Please try again.');
  } else if (lowercaseArtist === 'yes') {
    alert('Wonderful! That is correct!');
    correctCount += 1;
  }
}

artist();

let myNumber = 29;

function findNumber() {
  const maxAttempts = 6;

  for (let attempts = maxAttempts; attempts > 0; attempts--) {
    let faveNumber = prompt('What is my favorite number? 1-100');
    let replyNumber = parseInt(faveNumber);

    if (isNaN(replyNumber)) {
      alert('Please enter a valid number.');
    } else if (replyNumber > myNumber) {
      alert('Way too high! Try again!');
    } else if (replyNumber < myNumber) {
      alert('Way too low! Try again!');
    } else if (replyNumber === myNumber) {
      alert('Ding Ding Ding! You are correct! 29 is my favorite number. Congrats!');
      correctCount += 1;
      break;
    }

    if (attempts === 1) {
      alert('You are out of attempts, my favorite number is 29.');
    }
  }
}
function trip() {
  const tripResponse = prompt('Would I like to visit Japan in the future?');
  let lowercasetrip = tripResponse.toLowerCase();

  if (lowercasetrip === 'no') {
    alert('Not correct. I would love to visit.');
  } else if (lowercasetrip === 'yes') {
    alert('Nice job. You are correct!');
    correctCount += 1;
  }
}

findNumber();

alert(`Thanks for participating in this quiz, ${usersName}! You got ${correctCount} out of 7 correct!`);
