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

const btnRock=document.querySelector("#rock");
const btnPaper=document.querySelector("#paper");
const btnScissors=document.querySelector("#scissors");

btnRock.addEventListener("click", ()=>playRound(1));
btnPaper.addEventListener("click", ()=>playRound(2));
btnScissors.addEventListener("click", ()=>playRound(3));

const resultH=document.querySelector("#humanscore");
const resultC=document.querySelector("#computerscore");

const humanText = document.createElement('span');
const compText = document.createElement('span');

const result=document.querySelector("#endResult");
const resultText=document.createElement('h1');

function playRound(hChoice)
{
    let res="";
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

    humanText.textContent = humanScore;
    compText.textContent = compScore;

    resultH.innerHTML = ''; 
    resultC.innerHTML = '';

    resultH.appendChild(humanText);
    resultC.appendChild(compText);
    
    result.innerHTML='';

    if(humanScore==5 && compScore==5)
    {
        res="Tie";
        resultText.textContent = res;
        result.appendChild(resultText);
    }
    else if(compScore==5)
    {
        res="Computer Victory";
        resultText.textContent = res;
        result.appendChild(resultText);
    }
    else if(humanScore==5)
    {
        res="Human victory";
        resultText.textContent = res;
        result.appendChild(resultText);
    }
    if (humanScore === 5 || compScore === 5) 
    {
        humanScore=0;
        compScore=0;
    }   
}



