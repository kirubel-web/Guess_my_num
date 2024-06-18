let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⚠️ No Number!';
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = '🎉 Yay You got it.';
document.querySelector('.number').textContent = secretNumber ;

        //document.body.style.backgroundColor = 'green';
        document.querySelector('body').style.backgroundColor = 'green';

        if(score > highscore){
            highscore = score;
        }

        document.querySelector('.highscore').textContent = highscore;


    } else if (guess > secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '♨️ Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = '🤯 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game';
            document.querySelector('.score').textContent = 0;
        }

    }



});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...!';

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';


    document.querySelector('body').style.backgroundColor =  '#222';



})