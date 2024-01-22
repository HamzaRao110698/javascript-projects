let event=document.querySelector('#images')
event.addEventListener('click',function(e){

    //  console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
      
        let removeIt=e.target.parentNode

        removeIt.remove()
    }

   
    
    

})