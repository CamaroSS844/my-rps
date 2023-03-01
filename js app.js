const playBtn = document.querySelector('#play');

playBtn.addEventListener('click', function () {
    const welcome = document.querySelector('#welcome');
    const game = document.querySelector('#game');
    welcome.classList.add('hidden');
    setTimeout(function () {
        welcome.classList.add('inact');
    }, 4000);
    setTimeout(function () {
        game.classList.add('visible');
    }, 4100);
    setTimeout(function () {
        game.classList.remove('inact');
    }, 4600);

});

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const pic = document.querySelectorAll('.playC');
const pc = document.querySelectorAll('.computerC');
const gameBtns = document.querySelector('span.choice');

gameBtns.addEventListener('click', function (e) {
    if (e.target.id == 'rock' || 'paper' || 'scissors') {
        const trans = document.querySelectorAll('.active');
        for (i = 0; i < trans.length; i++) {
            trans[i].classList.add('jump');
            setTimeout(function () {
                for (i = 0; i < trans.length; i++) {
                    trans[i].classList.remove('jump');
                };
            }, 1500);
        }
        if (e.target.id == 'rock') {
            for (i = 0; i < pic.length; i++) {
                if (pic[0].className != 'playC active') {
                    setTimeout(function () {
                        for (i = 0; i < pic.length; i++) {
                            pic[1].classList.remove('active');
                            pic[2].classList.remove('active');
                            pic[0].classList.add('active');
                        }
                    }, 1510);
                }
            }
        } else if (e.target.id == 'paper') {
            for (i = 0; i < pic.length; i++) {
                if (pic[1].className != 'playC active') {
                    setTimeout(function () {
                        for (i = 0; i < pic.length; i++) {
                            pic[0].classList.remove('active');
                            pic[2].classList.remove('active');
                            pic[1].classList.add('active');
                        }
                    }, 1510);
                }
            }
        } else if (e.target.id == 'scissors') {
            for (i = 0; i < pic.length; i++) {
                if (pic[2].className != 'playC active') {
                    setTimeout(function () {
                        for (i = 0; i < pic.length; i++) {
                            pic[0].classList.remove('active');
                            pic[1].classList.remove('active');
                            pic[2].classList.add('active');
                        }
                    }, 1510);
                }
            }
        };
        computerChoice();
        setTimeout(function () {
            comparison();
        }, 1510);
    };
});
function computerChoice() {
    Math.floor(Math.random() * 10);
    if (Math.floor(Math.random() * 10) == 0) {
        for (i = 0; i < pic.length; i++) {
            if (pc[0].className != 'computerC active') {
                setTimeout(function () {
                    for (i = 0; i < pic.length; i++) {
                        pc[1].classList.remove('active');
                        pc[2].classList.remove('active');
                        pc[0].classList.add('active');
                    }
                }, 1510);
            }
        }
    } else if (Math.floor(Math.random() * 10) == 1) {
        for (i = 0; i < pic.length; i++) {
            if (pc[1].className != 'computerC active') {
                setTimeout(function () {
                    for (i = 0; i < pic.length; i++) {
                        pc[0].classList.remove('active');
                        pc[2].classList.remove('active');
                        pc[1].classList.add('active');
                    }
                }, 1510);
            }
        }
    } else if (Math.floor(Math.random() * 10) == 2) {
        for (i = 0; i < pic.length; i++) {
            if (pc[2].className != 'computerC active') {
                setTimeout(function () {
                    for (i = 0; i < pic.length; i++) {
                        pc[0].classList.remove('active');
                        pc[1].classList.remove('active');
                        pc[2].classList.add('active');
                    }
                }, 1510);
            }
        }
    } else {
        return computerChoice();
    }
};
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const output = document.querySelector('.output');
function comparison() {
    const picChoice = document.querySelector('.playC.active');
    const pcChoice = document.querySelector('.computerC.active');
    const x = picChoice.getAttribute("name");
    const y = pcChoice.getAttribute("name");
    if (x == y) {
        output.textContent = "It's a Tie";
    } else if (x == "paper" && y == "rock") {
        output.textContent = "Player wins";
    } else if (x == "rock" && y == "scissors") {
        output.textContent = "Player wins";
    } else if (x == "scissors" && y == "paper") {
        output.textContent = "Player wins";
    } else if (y == "paper" && x == "rock") {
        output.textContent = "Computer wins";
    } else if (y == "rock" && x == "scissors") {
        output.textContent = "Computer wins";
    } else if (y == "scissors" && x == "paper") {
        output.textContent = "Computer wins";
    }

    addScore();
};
//scores
function addScore() {
    if (output.textContent == "Player wins") {
        let x = Number(playerScore.textContent);
        playerScore.textContent = eval(x + 1);
    } else if (output.textContent == "Computer wins") {
        let x = Number(computerScore.textContent);
        computerScore.textContent = eval(x + 1);
    }
}