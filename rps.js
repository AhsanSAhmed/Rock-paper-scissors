function getRandomInt(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let humanScore=0,compScore=0;

function getComputerChoice()
{
    let compChoice=getRandomInt(1,3);
    return compChoice;
}
function getHumanChoice()
{
    let humanChoice=prompt("Enter rock, paper or scissors");
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice=="rock")
    {
        return(1);
    }
    else if(humanChoice=="paper")
    {
        return(2);
    }
    else if(humanChoice=="scissors")
    {
        return(3);
    }
}

function playRound()
{
    let hChoice=getHumanChoice();
    let cChoice=getComputerChoice();

    if(cChoice==hChoice)
    {
        humanScore++;
        compScore++;
    }
    else if((cChoice==1 && hChoice==3) || (cChoice==2 && hChoice==1) || (cChoice==3 && hChoice==2))
    {
        compScore++;
    }
    else if((hChoice==1 && cChoice==3) || (hChoice==2 && cChoice==1) || (hChoice==3 && cChoice==2))
    {
        humanScore++;
    }

    console.log(humanScore);
    console.log(compScore);

    if(humanScore>compScore)
        console.log("Human wins");
    else if(compScore>humanScore)
        console.log("Computer wins");
    else
        console.log("Tie");
}

function playGame()
{
    for(let i=0;i<5;i++)
    {
        playRound();
    }

    if(humanScore>compScore)
        console.log("TOTAL HUMAN VICTORY");
    else if(compScore>humanScore)
        console.log("TOTAL COMPUTER VICTORY");
    else
        console.log("TOTAL TIE");
}

playGame();
