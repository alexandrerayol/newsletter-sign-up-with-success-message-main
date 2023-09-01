const form = document.querySelector(".form form");
const btn = document.querySelector("#btn-submit");

const error = document.querySelector("#error-msg");
const emailInput = document.querySelector("#user-email");

form.addEventListener('input', validateEmail);
btn.addEventListener('click', enableSucess);

function validateEmail(){
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if(!regex.test(emailInput.value)){
        console.log('email invalido')
        return false;
    }else{
        console.log('email valido!!!')
        return true;
    }

}

function enableSucess(event){
    event.preventDefault();
    
    if(validateEmail()){
        console.log('entrou na tela de sucess');
    }else{
        validateEmail();
    }
}