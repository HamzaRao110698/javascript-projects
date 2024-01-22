// generate random color

const randomColor=function(){
    let hex="0123456789ABCDEF"
    let  color="#"
    for(i=0;i<6;i++){
        color +=hex[Math.floor(Math.random() *16)]

    }
    return color

}
 let startup
 startnow=function(){

   let change=function (){
    document.body.style.backgroundColor=randomColor()
   }

     if(!startup){
        startup=setInterval(change,1000)}
}
const endnow=function(){
    clearInterval(startup)
    startup=null
}

document.querySelector('#start').addEventListener('click',startnow)
document.querySelector('#stop').addEventListener('click',endnow)
