var options = ['r', 'p', 's']
// Initializing the variables that we are going to use
// Firstly, we have the computer's choices, so the computer can also only choose from rock, paper or scissors.
// Create array that lists all the optios for the game
// r = rock, p = paper, s = scissors
// Must include = sign to list options


// Create/Assign variable for win, lose and ties. Starts at 0.
// Global variables in this file that we can then access in this for a loop.
var wins = 0;
var losses = 0;
var ties = 0;

// This for loop is the main piece of logic for this game
// I equals 0, I less than 10 i plus plus.
// This for loop will run 10 times (10 results.)
// 0 to 9 for values of I
for (var i = 0; i < 10; i++) {

    // Randomly chooses options from the array.
    // Indented code as in for loop braces.
    // Computer guess assigned to a variable.
    // Options assigned to global variable here.
    // Give us values of 0 one or 2, and that will give us the random guess for the computer each time within this for loop. 
    var computerGuess = options[Math.floor(Math.random() * options.length)];

    // Collect users responses with prompts and convert to lower case.
    // So if the user types in a capital R capital P or capital S, it will just make sure that they are all in the correct case.
    var userGuess = prompt('Enter r, p or s to play!');
    userGuess = userGuess.toLowerCase();

    // Only run game logic if user chooses valid option
    // If statement that checks that that user guess is our rock paper or scissors, or the R, P or S, or lower case again.
    // '||' means or
    // Removes any other sort of user inputs. If it doesn't match this 'if statement', it will trigger them to to have another guess.
    // After the user has input their guess, and it will alert that the computer has made its choice again through random array
    if(userGuess === 'r' || userGuess === 'p' || userGuess === 's'); {
    alert ('Compter Choice: ' + computerGuess);

        // Indented code as in for loop braces.
        // Win and the lose conditions.
        // If both the user and computer have chosen the same option. They tie.
        // Alerts to user amout of ties using ties++ as it increases it one value at a time. (s) used as the first tie would go from 0 to 1 (no plural).
        if(userGuess === computerGuess) {
            ties++;
            alert('You have tied ' + ties + ' time(s).');
        // If guesses are not the same options, use else if condition.
        // Various user guesses on the left hand side again, within normal brackets.
        // '&&' Double Ampersand - evaluates one side and returns its exit status.
        // Within the brackets, that is one set of conditions.
        // '||' means or
        } else if (
            (userGuess === 'r' && computerGuess === 's') ||
            (userGuess === 's' && computerGuess === 'p') ||
            (userGuess === 'p' && computerGuess === 'r')
        ) {
            wins++;
            alert('You have won ' + wins + ' time(s).' );
        } else {
            losses++;
            alert('You have lost ' + losses + ' time(s).');
        }

    }

}

// Alert the total number of wins, ties, and losses to the screen again, calling on those variables.
// '\n' to make a line break - spaces it out nicely on the screen
alert('Total Wins: ' + wins + '\nTotal Losses: ' + losses + '\nTotal Ties: ' + ties );