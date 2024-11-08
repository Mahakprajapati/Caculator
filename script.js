let String="";
const buttons =document.querySelectorAll('.button');
let input=document.querySelector('input');
const error = document.querySelector('.error-container');
console.log('=');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            if(String==""){
                error.classList.add('error');
            }else{
            String=eval(String);
            input.value=String;
            }
        }else if(e.target.innerHTML == 'C'){
            String="";
            input.value=String;
        }
        else{
            String = String + e.target.innerHTML;
            input.value=String;
        }
    })
})
input.addEventListener('focus',()=>{
    error.classList.remove('error');
})
