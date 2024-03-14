'use strict';

let score = 0;

const bioQuestions = [
{
  question: 'Is my boyfriend the reason I keep going?',
  answer: 'yes',
  congratulate: 'Yes. He is the reason I keep going!'
  giveAnswer: 'No. He is the reason I continue.',
  questionType: 'YN'
},
{
  question: 'Is red my favorite color?'
  answer: 'yes',
  congratulate: "Red is my favorite color! Nice Job!",
  giveAnswer: 'No, you guessed wrong. My favorite color is red.',
  questionType: 'Y/N'
},
{
  question: 'Am I from OKC, OK?',
  answer: 'yes'
  congratulate: 'Nice, You are correct!'
  giveAnswer: 'No, Incorrect. I am from OKC.'
  questionType: 'YN'
},
{
 question: 'Do I like games?',
 answer: 'yes',
 congratulate: 'I love games, from PC to Console!',
 giveAnswer: 'Who would not like games?'
 questionType:'YN'
},
{
  question: 'Is Keshi my favorite artist?',
  answer: 'yes'
  congratulate: 'Keshi is my favorite artist. Nice!'
  giveAnswer: 'Wrong. Keshi is my favorite artist.'
}
{
  question: 'I am thinking of a number between 1-10, try and guess.'
  answer: Math.floor(Math.random()) * (10 - i * 1)
  questionType: 'INT',
  allowedAttempts: 4
},
{
 question: 'Would I like to visit Japan in the future?',
 answer: 'yes'
 congratulate: 'Yeah. I would to love to visit.'
 giveAnswer: 'I would like to visit.',
}
];

function askQuestions(questions) {
  for (const q of questions) {
  let answer;
switch (q.questionType) {
  case 'YN':
}
},
    answer = sanitizeInput(promptuser(q.question), 'str');
    while (answer === '' || answer === null || answer !== 'yes' && answer !== 'no'){
      answer = sanitizeInput(promptuser(q.question + ' Valid input: yes/no or y/n'), 'str');
    }
    if (answer == q.answer) {
      score++;
      messageUser(q.congratulate);
    } else {
      messageUser (q.giveAnswer);
    }
    break;
    case 'TF':
      answer = promptuser (q.question);
      break;
      case 'INT': {
        let tracker = 0;
        while(tracker <= q.allowedAttempts - 1) {
          answer = parseInt(promptuser(q.question));
          if (answer === q.answer) {
            score++;
            messageUser('You guessed the number in '+(tracker + 1) + ' tries!');
            break;
          } else if (tracker >= q.allowedAttempts - 1){
            messageUser('Sorry. You did not get it. The number was ' + q.answer);
            break;
          } else {
            if (answer < q.answer){
              messageUser('The number is greater than ' +answer+ '.');
            } else if (!Number,isInteger (answer) || answer < 10) {
              messageUser('Use a number between 1-10');
            }
          }
          tracker++;
          }
          break;
          }
        case 'MC': let gotIt = false;
          let tries = q.allowedAttempts;
          while (tries < 0 && gotIt !== true){
            answer = promptuser(q.question);
            if (answer === null)}
            
          answer = answer.toLowerCase();
          for (const correctAnswer of q.question)
            if (answer === correctAnswer.toLowerCase()){
              score++;
              messageUser(q.congratulate);
              gotIt = true;
            }
              function sanitizeInput(inputValue, inputType) {
                if (inputType === 'str'){
                  if (inputValue === null){
                    inputValue = '';
                  }
                  inputValue = inputValue.toLowerCase();
                  if (inputValue === 'y'){
                    inputValue = 'yes';
                  } else if (inputValue === 'n') {
                    inputValue = 'no';
                  }
                  return inputValue;
                }
              }
              
              function kickOff() {
                let userName = getUserName();
                messageUser('Hello,' + userName + ' Welcome to the site.');
              
                if (userName !== 'cc'){
                  askGenericQuestions(bioQuestions);
                }
              
                if (userName !== 'cc'){
                  messageUser('Thanks for participating in this quiz ' + userName + ' you scored' + score + '/' + bioQuestions.length + '!');
                } else {
                  messageUser('Cheaters never prosper!');
                }
              }
              
              function getUserName() {
                let userName = prompt('your name?');
                return userName;
              }
              
              function messageUser(msg) {
                alert(msg);
              }
              
              kickOff();
