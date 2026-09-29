const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePr = document.querySelector('#user-score');
const compScorePr = document.querySelector('#comp-score');

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
      const options = ['rock', 'paper', 'scissors'];
     let num = Math.floor(Math.random()*3); 
     return options[num];
}

const drawGame = () => {
    msg.innerText = 'Game was Draw';
    msg.style.backgroundColor = "#23286c";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin === true){
        userScore++;
        userScorePr.innerText = userScore;
        msg.innerText = `You WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    }else{
        compScore++;
        compScorePr.innerText = compScore;
         msg.innerText = `You LOSS. ${compChoice} beats you ${userChoice}`;
         msg.style.backgroundColor = "red"; 
    } 
}

const playGame = (userChoice) => {
    const compChoice =  genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
             if(compChoice === 'paper'){
                userWin = false;
             }else userWin = true;
        }else if(userChoice === 'paper'){
            if(compChoice === 'scissor'){
                userWin = false;
            }else userWin = true;
        }else{
            if(compChoice === 'rock'){
                userWin = false;
            }else userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



for (let i = 0; i < choices.length; i++) {
   choices[i].addEventListener('click', ()=>{
   const userChoice = choices[i].getAttribute('id');
   playGame(userChoice);
   });
}