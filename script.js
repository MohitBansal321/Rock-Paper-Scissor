// initilize the total score
const totalScore={computerScore:0,playerScore:0}
// get the computer choice
function getComputerChoice() {
    let st=['Rock','Paper','Scissors']
    const randomValue=(Math.floor(Math.random()*3))
    return st[randomValue]
}

// get the result as score 
function getResult(playerChoice, computerChoice) {

     let score
     if(playerChoice==computerChoice){
       score=0
     }

    else if(playerChoice=='Rock' && computerChoice=='Scissors'){
      score=1
    }
    else if(playerChoice=='Paper' && computerChoice=='Rock'){
      score=1
    }
    else if(playerChoice=='Scissors' && computerChoice=='Paper'){
      score=1
    }


   else{
     score=-1
   }


  return score
}

// show who win's
function showResult(score, playerChoice, computerChoice) {

  const result=document.getElementById('result')
  const hands=document.getElementById('hands')
  const playerScore=document.getElementById('player-score')
  if(score==0){
    result.innerText="It's a Tie!"
  }else if(score==-1){
    result.innerText="You Lose"
  }
  else{
    result.innerText="You Won"
  }
  hands.innerText=`👤🧑${playerChoice} vs 🤖💻${computerChoice}`
  playerScore.innerText="Your Score: " 
    +  totalScore['playerScore']

}
// click function when you click by playerchoice
function onClickRPS(playerChoice) {
  const computerChoice=getComputerChoice();
  const score=getResult(playerChoice,computerChoice);
  totalScore['playerScore'] += score
  showResult(score,playerChoice,computerChoice)
}

// start when you click any button
function playGame() {

    allDiv=document.querySelectorAll('.rpsButton')
  
    allDiv.forEach(index=>{
        index.onclick= () => onClickRPS(index.value)
      })
 

  const endGameBtn=document.getElementById('endGameButton')
  endGameBtn.onclick=()=>{
    endGame()
  }
}

// end game function
function endGame() {
  totalScore['playerScore']=0
  totalScore['computerScore']=0
  const result=document.getElementById('result')
  const hands=document.getElementById('hands')
  const playerScore=document.getElementById('player-score')
  result.innerText=""
  hands.innerText=""
  playerScore.innerText=""
}

playGame()