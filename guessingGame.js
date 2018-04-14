var lowerLimit = 1;
var upperLimit = 25;
var tries = 5;
var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
var guess = '';
var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + '.';

// Keep prompting the user for a guess until the amount of tries run out.
while (tries > 0) {
    // Prompt the user for a guess.
    guess = prompt(message, guess);

    // If the game is quit out of, the loop will break and the user will be told.
    if (guess == null) {
        alert('Quitting game now.');
        break;
    }
    // isFinite checks to see if the guess is a number.
    else if (isFinite(guess) && guess != '') {
        // Makes sure the guess is converted into a number.
        guess = +guess;

        // If the guess is too high, this lets the user know.
        if (guess > answer) {
            tries = tries - 1;
            alert('Your guess is too high. You have ' + tries + ' tries left.');
        }
        // If the guess is too low, this lets the user know.
        else if (guess < answer) {
            tries = tries - 1;
            alert('Your guess is too low. You have ' + tries + ' tries left.');
        }

        // If all of the other options are not true, the answer is correct.
        else {
            alert('Great job, you got it!');
            break;
        }
    }
    // If the guess is not a number, let the user know.
    else {
        alert('You must enter a number as a guess.');
    }
}

// If the user ran out of tries, the alert function will tell the user.
if (tries == 0) {
    alert('You ran out of tries.  The number was ' + answer + '.');
}
