// FORM

const formContainer = document.querySelector('.form__container');
const form = document.querySelector('.form');
const emailInput = document.querySelector('#email');
const buttonSubmit = document.querySelector('.submit');
const labelError = document.querySelector('.label__error')

// SUCCESS

const success = document.querySelector('.success');
const successDismiss = document.querySelector('.success__dismiss');
const successEmail = document.querySelector('.success__email');

window.addEventListener('load', () => {
    const emailError = localStorage.getItem('emailError');

    if (emailError) {
        emailInput.classList.add('error');
        labelError.classList.add('error__message');
    }
});

// FORM ACTIONS

validEmail = email => {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expression.test(email);
}
    
form.addEventListener('submit', (e)=>{

    e.preventDefault(); 

    const mail = emailInput.value.trim();

    if(!validEmail(mail)){
        labelError.classList.toggle('error__message');
        emailInput.classList.toggle('error');

        localStorage.setItem('emailError', 'true');
    } else {
        success.classList.toggle('active');
        localStorage.removeItem('emailError');
        successEmail.textContent = mail;    
        formContainer.classList.toggle('send');
    }
});

// SUCCESS ACTION

successDismiss.addEventListener('click', () => {
    console.log('Botón de éxito clicado');
    success.classList.remove('active');
    form.submit();
});
