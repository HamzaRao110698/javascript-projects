const form=document.querySelector(".form")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
   
    let weight=(document.querySelector(".weight").value)
    let height=(document.querySelector(".height").value)
    let result=document.querySelector(".result")
    let bmi=(weight / ((height * height) / 10000)).toFixed(2)

     if(weight=="" || weight<0 || isNaN(weight)){
        result.innerHTML=`please enter valid weight `
    } else if(height=="" || height<0 || isNaN(height)){
        
            result.innerHTML=`please enter valid height `
        }
        else if(bmi<19){
            
                result.innerHTML=` ${bmi} : you are under weight`
   
        }else if(bmi>19 && bmi<25){
            
            result.innerHTML=` ${bmi}  : you are fit`

    }else if(bmi>25){
            
        result.innerHTML=` ${bmi}  : you are over weight`

}


    
    



})