let randomNum=parseInt(Math.random()*200+1)
console.log(randomNum);

let userBox=document.querySelector(".input")
let botton=document.querySelector(".btn")
let userData=document.querySelector(".guess")
let remaining=document.querySelector(".remaining")
let hint=document.querySelector(".hint")
let startover=document.querySelector(".display")

let p=document.createElement("p")

let data=[]
let chances=1

let playGame=true
if(playGame){
    botton.addEventListener("click",(e)=>{
        e.preventDefault()
       let guess= parseInt(userBox.value)
       validation(guess)


    })
}



function validation(guess){
    if(isNaN(guess)){
        alert("must be enter only numbers")
    }else if(guess>200){
        alert("you can,t enter more than 200 number")
    }else if(guess<0){
        alert("you can,t enter less than 1 number")
    }
    else{
        data.push(guess)
        if(chances >=10){
            gameDisplay(guess)
            displayMessage(`game over : random number was ${randomNum}`)
            endgame()

        }else{
            gameDisplay(guess)
            checkNum(guess)
        }
    }
        
    

}

function checkNum(guess){
    if(guess===randomNum){
        displayMessage(`you was guessed it right`)
        hint.style.borderColor="green"
        hint.style.color="green"
        endgame()
    }else if(guess<randomNum){
        displayMessage(`your number is too low`)
    }else if(guess>randomNum){
        displayMessage(`your number is too hight`)
    }
}




function gameDisplay(guess){
    userBox.value=""
    userData.innerHTML +=`${guess }  ,`
    chances++
    remaining.innerHTML=`${11-chances}`




}


function displayMessage(message){

    hint.innerHTML=`${message}`
}


function endgame(){
    userBox.value=""
    userBox.setAttribute("disabled","")
    // p.classList.add(".reset")
    p.innerHTML=`<h2 id="start">START AGAIN</h2>`
    startover.appendChild(p)
    playGame=false
    startGame()



}

function startGame(){
    let startBtn=document.querySelector("#start")
    startBtn.addEventListener("click",(e)=>{
        randomNum=parseInt(Math.random()*200+1)
        remaining.innerHTML=`${11-chances}`
        data=[]
        chances=1
        
        userData.innerHTML=""
        hint.style.borderColor = ""
        hint.style.color =" "

        hint.innerHTML=""
        userBox.removeAttribute("disabled")
        startover.removeChild(p)
        playGame=true

    })

}


