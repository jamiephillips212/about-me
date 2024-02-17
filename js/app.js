'use strict';

let correctCount = 0;

function getName(){
  // declaring a constant variable called usersName, assigning it the value of what the prompt returns (the users input)
  const usersName = prompt('Hey! What is your name?');
  while(usersName == null || usersName === ''){
    if (usersName == null){
      usersName = confirm('Would you like to skip?');
      usersName = '';
      return usersName;
    } else {
      usersName = prompt('Enter a name');
    }
}
  return usersName;
}

let usersName = getName();
// console.log(usersName);


alert('Welcome, ${usersName}: Hit OK to begin the quiz!');

alert('I am going to ask you several Yes or No questions. Hit OK when you are ready to begin.');

function getResponse(){
  // Declearing a function to get a response from the user
  const metResponse = prompt('Is my boyfriend the reason I keep going?');
  let lowercaseResponse = metResponse.toLowerCase[];{
    if (lowercaseResponse == 'no'){
      alert('Unfortunately, that is inccorect. Try again!');
    } else (lowercaseResponse == 'yes'){
          alert('Correct! Great Job!');
          correctCount += 1;
        }
      }
    }

function colorAnswer(){
  // running function to ask user about my favorite color
  const faveColor = prompt('Is red my favorite color?')
  let lowercaseColor = faveColor.toLowerCase();{
    if (lowercaseColor == 'no'){
      alert("Unfortunately, you guessed wrong! Red is my favorite color!");
    } else if (lowercaseColor == 'yes'){
      alert("Correct! Good job!");
      correctCount += 1;
    }
  }
}
let faveColor = colorAnswer();
// console.log(faveColor);

function getTown(){
  const homeTown = prompt('Am I from OKC, OK?')
  let lowercaseTown = homeTown.toLowerCase();{
    if (lowercaseTown == 'no'){
      alert("Incorrect! Try again.");
    } else if (lowercaseTown == 'yes'){
      alert("Wow! You got it right!");
      correctCount += 1;
    }
  }
}
let homeTown = getTown();
// console.log(homeTown);

function Games(){
  const Games = prompt('Do I like games?')
  let lowercaseGames = Games.toLowerCase();{
    if(lowercaseGames == 'no'){
      alert('Incorrect. I love games!');
    } else if (lowercaseGames == 'yes'){
      alert('Correct! Nice Going!');
      correctCount += 1;
    }
  }
}
let Games = Games();
// console.log(Games);

let myNumber = 29;

function findNumber(){
  for (let attempts = 4; attempts > 0; attempts--) {
    let faveNumber = prompt('What is my favorite number? 1-100');
    let replyNumber = parseInt(favNumber);
    if (replyNumber > myNumber) {
      alert('Way too high! Try again!');
    } else if (replyNumber > myNumber) {
      alert('Way too low! Try again!');
    } else if(replyNumber === myNumber) {
      alert('Ding Ding Ding! You are correct! 29 is my favorite number! Congrats!');
      correctCount += 1;
      break;
    }
    if (attempts === 1){
      alert('You are out of attempts, my favorite number is 29.');
    }
  }
}
let replyNumber = findNumber();
//console.log(replyNumber);

alert('Thanks for participating in this quiz, ${usersName}! You got ${correctCount} out of 5 correct!');
