let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score"); 
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    msg.innerText = `Draw game beacause both choose same`;
    msg.style.backgroundColor = "blueviolet";

}
const showWinner = (userWin,userChoice,compChoice) =>
{
if (userWin)
    {
         msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
         userScore++;
         userScorePara.innerText = userScore;
    }
else
    { 
         msg.innerText = `you loose ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
         compScore++;
         compScorePara.innerText = compScore;
    }
}


const playGame = (userChoice) => {
     const compChoice = genCompChoice();
     
     if (userChoice === compChoice)
    {
        drawGame();  
    }
 else
   {
      let userWin = null;
     if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
     }
     else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;

     }
     else if(userChoice === "scissors"){
         userWin = compChoice === "rock" ? false : true;
     }
    showWinner(userWin,userChoice,compChoice);
    }
 };

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
       
    })
})