const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById ('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username,"O nome de usuário é obrigatorio.")
    } else {
        setSuccessFor(username);
    }
    if(emailValue===""){
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor (email, "Por favor insira um email válido.");
    } else {
        setSuccessFor(email)
    } 
    if (passwordValue ===""){
        setErrorFor(password, "A senha é obrigatoria")
    } else if (passwordValue.length < 7){
        setErrorFor (password, "A senha precisa ter no minimo 7 caracteres")
    } else {
        setSuccessFor(password,"Senha valida")
    }
    if (passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatorio')
    } else if (passwordConfirmationValue != passwordValue){
        setErrorFor(passwordConfirmation, "As senhas precisam ser iguais")
    } else {
        setSuccessFor(passwordConfirmation)
    }
    
}
    

function setErrorFor(input, message){
    const formControl = input.parentElement;
    // pegar todos smaal que esta dentro do form control
    const small = formControl.querySelector("small");

    // adicionar mensagem de erro
    small.innerText = message;

    // adicionar classe de erro 
    formControl.className = "form-control error"

}


function setSuccessFor (input, message){
    // selecionar o element pai do input, para alterar a classe de acordo com o resultado do input
    const formControl = input.parentElement;
    // adicionar a classe de sucesso
    formControl.className = "form-control success"
    
    
}



function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )}