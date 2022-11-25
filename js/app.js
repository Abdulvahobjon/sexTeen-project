let valueText = document.querySelector('input')
let alert = document.querySelectorAll('.alert')

valueText.addEventListener( 'input' , function(e){

    for (let i = 0; i < alert.length; i++) {
        let match = alert[i]
        if(match){
            let textValue = match.innerText || match.innerHtml
            if(textValue.toLowerCase().indexOf(valueText.value.toLowerCase()) > -1){
                match.style.display = 'block'    
            }else{
                match.style.display = 'none'  
            }
        }
    
        
    }

})



