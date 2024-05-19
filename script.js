'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.score').textContent = score;
let highscore = 0;
let minNumberH = secretNumber - 3;
if (minNumberH < 1) {
  minNumberH = 1;
}
let maxNumberH = secretNumber + 6;
if (maxNumberH > 20) {
  maxNumberH = 20;
}

document.querySelector('.hint').classList.remove('hidden');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = 'message';
};

// document.querySelector(".number").textContent = secretNumber;

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    // If the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '5rem';
    document.querySelector('.number').textContent = guess;

    if (score > highscore) {
      highscore = score;
    }
    // If the guess is higher
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (secretNumber - guess < 5 && secretNumber - guess > 0) {
        document.querySelector('.message').textContent = 'A Bit Low!';
      } else if (guess - secretNumber < 5 && guess - secretNumber > 0) {
        document.querySelector('.message').textContent = 'A Bit High!';
      } else if (guess - secretNumber > 5) {
        document.querySelector('.message').textContent = 'Too High!';
      } else if (secretNumber - guess > 5) {
        document.querySelector('.message').textContent = 'Too Low!';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#be3434';
      document.querySelector('.number').style.fontSize = '5rem';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#080808';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.hint').classList.remove('hidden');
});

document.querySelector('.hint').addEventListener('click', function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
  minNumberH = secretNumber - 3;
  if (minNumberH < 1) {
    minNumberH = 1;
  }
  maxNumberH = secretNumber + 6;
  if (maxNumberH > 20) {
    maxNumberH = 20;
  }
  document.querySelector('.minNumber').textContent = minNumberH;
  document.querySelector('.maxNumber').textContent = maxNumberH;
  document.querySelector('.hint').classList.add('hidden');
});

document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.hint').classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (
    e.key === 'Escape' &&
    !document.querySelector('.modal').classList.contains('hidden')
  ) {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  }
});

document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
