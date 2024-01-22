// alert("hello")
const time=document.querySelector(".time")

setInterval(()=>{
    // let clock=new Date()
    time.innerHTML=new Date().toLocaleTimeString()
},1000)