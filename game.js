let rockPlayer=document.getElementById("rock-p")
let paperPlayer=document.getElementById("paper-p")
let sicissorsPlayer=document.getElementById("scissors-p")
let youwon=document.getElementById("youwon")
let compwon=document.getElementById("compwon")
let button=document.getElementById("button")
let rockComp=document.getElementById("rock-c")
let paperComp=document.getElementById("paper-c")
let sicissorsComp=document.getElementById("scissors-c")
let playagain=document.getElementById("playagain")
let rockButton=document.getElementById("rockButton")
let paperButton=document.getElementById("paperButton")
let sicissorsButton=document.getElementById("scissorsButton")
let rps=document.getElementById("rps")
let playerScore=document.getElementById("playerScore")
let compScore=document.getElementById("compScore")

scorePlayer=0
scoreComp=0
randomNum=0

function randomGenerator(){
    a=Math.floor(Math.random()*(2+1)+1)
    return a
}

function compPlays(){
    randomNum=randomGenerator()
    if (randomNum==1){
        rockComp.style.display='block'
        paperComp.style.display='none'
        sicissorsComp.style.display='none'
    }
    if (randomNum==2){
        rockComp.style.display='none'
        paperComp.style.display='block'
        sicissorsComp.style.display='none'
    }
    if (randomNum==3){
        rockComp.style.display='none'
        paperComp.style.display='none'
        sicissorsComp.style.display='block'
    }
}

rockButton.onclick=()=>{
    compPlays()
    rockPlayer.style.display='block'
    sicissorsPlayer.style.display='none'
    paperPlayer.style.display='none'

    if (randomNum==2){
        scoreComp+=1
    }else if(randomNum==3){
        scorePlayer+=1
    }
    playerScore.innerHTML=scorePlayer
    compScore.innerHTML=scoreComp
    if(scorePlayer==5){
        youwon.style.display="flex";
        compwon.style.display="none";
        button.style.display="none";
        rps.style.marginBottom="25%";
    }
    else if(scoreComp==5){
        youwon.style.display="none";
        compwon.style.display="flex";
        button.style.display="none";
        rps.style.marginBottom="25%";
    }
}
sicissorsButton.onclick=()=>{
    compPlays()
    sicissorsPlayer.style.display='block'
    rockPlayer.style.display='none'
    paperPlayer.style.display='none'

    if (randomNum==1){
        scoreComp+=1
    }else if(randomNum==2){
        scorePlayer+=1
    }
    playerScore.innerHTML=scorePlayer
    compScore.innerHTML=scoreComp
    if(scorePlayer==5){
        youwon.style.display="flex";
        compwon.style.display="none";
        button.style.display="none";
        rps.style.marginBottom="25%";
    }
    else if(scoreComp==5){
        youwon.style.display="none";
        compwon.style.display="flex";
        button.style.display="none";
        rps.style.marginBottom="25%";
    }
}
paperButton.onclick=()=>{
    compPlays()
    paperPlayer.style.display='block'
    sicissorsPlayer.style.display='none'
    rockPlayer.style.display='none'

    if (randomNum==3){
        scoreComp+=1
    }else if(randomNum==1){
        scorePlayer+=1
    }
    playerScore.innerHTML=scorePlayer
    compScore.innerHTML=scoreComp
    if(scorePlayer==5){
        youwon.style.display="flex";
        compwon.style.display="none";
        button.style.display="none";
        rps.style.marginBottom="25%";
    }
    else if(scoreComp==5){
        youwon.style.display="none";
        compwon.style.display="flex";
        button.style.display="none";
        rps.style.marginBottom="25%";
    }
}
playagain.onclick=()=>{
    location.href="game.html";
}