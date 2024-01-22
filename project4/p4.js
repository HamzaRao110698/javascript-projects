let randomNum=parseInt(Math.random()*150+1)
// console.log(randomNum);

let inputBox=document.querySelector(".input")
let botton=document.querySelector(".btn")
let data=document.querySelector(".previousguess")
let remaining=document.querySelector(".remaining")
let hint=document.querySelector(".hint")
let displayBox=document.querySelector(".display")


let p=document.createElement("p")

 let record=[]
 let chanceRemaining=1

 playGame=true

 if(playGame){
    botton.addEventListener('click',(e)=>{
        e.preventDefault()
        let guess=parseInt(inputBox.value)

        //  console.log(guess);
        validationguess(guess)

    })

 }



 function validationguess(guess){
    if(isNaN(guess)){
        alert("this is not a number")
    } else if(guess>150){
        alert("more than 100 number is not valid")
    }else if(guess<1){
        alert("less than 1 number is not valid")
    }
    else{
        record.push(guess)
        if(chanceRemaining >= 10){
            displayguess(guess)
            displaymessage(`game over .Random num was ${randomNum}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)

        }

    }


 }

 function checkguess(guess){
    if(guess===randomNum){
        displaymessage(`you guessed it right`)
        hint.style.color="green"
        hint.style.borderColor="green"
         endgame()
         
        
    }
    else if(guess > randomNum){
        displaymessage(`your number is too high`)
     }
     
     else if(guess < randomNum){
        displaymessage(`your number is too low`)
     }
 }

 function displayguess(guess){
    inputBox.value=""
    data.innerHTML +=`${guess }  , `
    chanceRemaining++
    remaining.innerHTML= `${11-chanceRemaining}`
    

 }
  
 function displaymessage(message){

    hint.innerHTML=`${message}`
    // hint.style.border.color= "green"
 }

 function endgame(){
    inputBox.value=""
    inputBox.setAttribute("disabled","")
    p.classList.add("botton")
    p.innerHTML=(`<h2 id="newGame" >start new game </h2>`)
    displayBox.appendChild(p)
    playGame=false
    gamestart()



 }

 function gamestart(){
    let start=document.querySelector("#newGame")
    start.addEventListener("click",(e)=>{
        randomNum=parseInt(Math.random()*100+1)

        record=[]
        chanceRemaining=1
        data.innerHTML=""
        hint.style.color=""
        hint.style.borderColor=""
        hint.style.color=""
         
        hint.innerHTML=""
        remaining.innerHTML= `${11-chanceRemaining}`
        inputBox.removeAttribute("disabled")
        displayBox.removeChild(p)
        playGame=true


    })


 }






