const form = document.querySelector(".form form");
const btn = document.querySelector("#btn-submit");
const error = document.querySelector("#error-msg");
const emailInput = document.querySelector("#user-email");
const container = document.querySelector('.container');
const hidden = document.querySelector('.hidden');
const btnConfirm = document.querySelector('#btn-confirm');
const emailSuccess = document.querySelector('#suscess-page-email');

form.addEventListener('input', validateEmail);

btn.addEventListener('click', enableSucess);

btnConfirm.addEventListener('click', () => {location.reload()})

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
        container.style.display = 'none';
        hidden.style.display = 'flex';
        setEmailSuccess();
    }else{
        validateEmail();
    }
}

function setEmailSuccess(){
    let userEmailText = emailInput.value;
    emailSuccess.innerText = userEmailText;
}