var lowerLimit = 1;
var upperLimit = 10;
var tries = 5;
var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
var guess = '';
var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';


while (tries > 0) {
    guess = prompt(message, guess);


    if (guess == null) {
        alert('Quitting game now.');
        break;
    } else if (isFinite(guess) && guess != '') {
        guess = +guess;

        if (guess < lowerLimit) {
            alert('Your guess should be no less than ' + lowerLimit + '.');
        } else if (guess > upperLimit) {
            alert('Your guess should be no greater than ' + upperLimit + '.');
        } else if (guess > answer) {
            alert('Your guess is too high.');
        } else if (guess < answer) {
            alert('Your guess is too low');
        } else {
            alert('Great job, you got it!');
            break;
        }
    } else {
        alert('You must enter a number as a guess.');
    }

    tries = tries - 1;
}

if (tries == 0) {
    alert('You ran out of tries.  The number was ' + answer + '.');
}