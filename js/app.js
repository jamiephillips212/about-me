'use strict';

let score = 0;

const bioQuestions = [
  {
    question: 'Is my boyfriend the reason I keep going?',
    answer: 'yes',
    congratulate: 'Yes. He is the reason I keep going!',
    giveAnswer: 'No. He is the reason I continue.',
    questionType: 'YN'
  },
  {
    question: 'Is red my favorite color?',
    answer: 'yes',
    congratulate: 'Red is my favorite color! Nice Job!',
    giveAnswer: 'No, you guessed wrong. My favorite color is red.',
    questionType: 'Y/N'
  },
  {
    question: 'Am I from OKC, OK?',
    answer: 'yes',
    congratulate: 'Nice, You are correct!',
    giveAnswer: 'No, Incorrect. I am from OKC.',
    questionType: 'YN'
  },
  {
    question: 'Do I like games?',
    answer: 'yes',
    congratulate: 'I love games, from PC to Console!',
    giveAnswer: 'Who would not like games?',
    questionType: 'YN'
  },
  {
    question: 'Is Keshi my favorite artist?',
    answer: 'yes',
    congratulate: 'Keshi is my favorite artist. Nice!',
    giveAnswer: 'Wrong. Keshi is my favorite artist.',
    questionType: 'YN'
  },
  {
    question: 'I am thinking of a number between 1-10, try and guess.',
    answer: Math.floor(Math.random() * 10 - 1 +1) + 1,
    questionType: 'INT',
    allowedAttempts: 4
  },
  {
    question: 'Would I like to visit Japan in the future?',
    answer: 'yes',
    congratulate: 'Yeah. I would love to visit.',
    giveAnswer: 'I would like to visit.',
    questionType: 'YN'
  }
];

function askQuestions(questions) {
  for (const q of questions) {
    let answer;
    switch (q.questionType) {
    case 'YN':
      answer = sanitizeInput(prompt(q.question), 'str');
      while (answer === '' || answer === null || (answer !== 'yes' && answer !== 'no')) {
        answer = sanitizeInput(prompt(q.question + ' Valid input: yes/no or y/n'), 'str');
      }
      if (answer === q.answer) {
        score++;
        alert(q.congratulate);
      } else {
        alert(q.giveAnswer);
      }
      break;
    case 'INT':
      let tracker = 0;
      while (tracker < q.allowedAttempts - 1) {
        answer = parseInt(prompt(q.question));
        if (answer === q.answer) {
          score++;
          alert('You guessed the number in ' + (tracker + 1) + ' tries!');
          break;
        } else if (tracker >= q.allowedAttempts - 1) {
          alert('Sorry. You did not get it. The number was ' + q.answer);
          break;
        } else {
          if (isNaN(answer) || answer < 1 || answer > 10) {
            alert('Use a number between 1-10');
          } else if (answer < q.answer) {
            alert('The number is greater than ' + answer + '.');
          }
        }
        tracker++;
      }
      break;
    }
  }
}
function sanitizeInput(inputValue, inputType) {
  if (inputType === 'str') {
    if (inputValue === null) {
      inputValue = '';
    }
    inputValue = inputValue.toLowerCase();
    if (inputValue === 'y') {
      inputValue = 'yes';
    } else if (inputValue === 'n') {
      inputValue = 'no';
    }
    return inputValue;
  }
}

function kickOff() {
  let userName = getUserName();
  alert('Hey ' + userName + ', welcome to my site!');

  if (userName !== 'cc') {
    askQuestions(bioQuestions);
  }

  if (userName !== 'cc') {
    alert('Thanks for playing ' + userName + '! You scored ' + score + '/' + bioQuestions.length + '!');
  } else {
    alert('Cheaters never prosper!');
  }
}

function getUserName() {
  let userName = prompt('What is your name?');
  return userName;
}

kickOff();
