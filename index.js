const form = document.querySelector(".form form");
const btn = document.querySelector("#btn-submit");

const error = document.querySelector("#error-msg");
const emailInput = document.querySelector("#user-email");

form.addEventListener('input', validateEmail);
btn.addEventListener('click', enableSucess);

function validateEmail(){
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if(!regex.test(emailInput.value)){
        setError(true);
        return false;
    }else{
        setError(false);
        return true;
    }
}

function setError(boolean){
    if(boolean){
        error.style.display = 'block';
        emailInput.style.border = '2px solid red'
    }else{
        emailInput.style.border = '';
        error.style.display = 'none';
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