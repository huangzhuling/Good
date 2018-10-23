var randomNumber=Math.floor((Math.random()*100)+1);
// console.log(randomNumber);

var guessField=document.querySelector('.guessField');
console.log(guessField);

var guesses=document.querySelector('.guesses');
console.log(guesses);
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');
var guessSubmit=document.querySelector('.guessSubmit');

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
    guesses.innerHTML+=guessField.value+" ";
    guesses.style.backgroundColor="red";
    // document.write('我是结论');

    // console.log(a+b);
}

// checkGuess();
// checkGuess(1,2);
// checkGuess("abc","www");
// checkGuess(1,"2");