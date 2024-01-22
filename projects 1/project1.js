let body=document.querySelector("body")
 let bottons=document.querySelectorAll(".btn")

 bottons.forEach( (botton)=>{

    botton.addEventListener( "click",(e)=>{
        switch (e.target.id) {
                case "yellow":
                body.style.backgroundColor=e.target.id
                break;
                case "blue":
                body.style.backgroundColor=e.target.id
                break;
                case "brown":
                body.style.backgroundColor=e.target.id
                break;
                case "pink":
                body.style.backgroundColor=e.target.id
                break;
                case "grey":
                body.style.backgroundColor=e.target.id
                break;
        
            default:
                break;
        }

        
    })
 })