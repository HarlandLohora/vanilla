const form      = document.getElementById('form')
const username  = document.getElementById('username')
const email     = document.getElementById('email')
const password  = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message){
  const formControl = input.parentElement
  const small       = formControl.querySelector('small')
  formControl.className = 'form-control error'
  small.innerText  = message
}

function showSuccess(input){
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isValidEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkRequired(inputs){
  inputs.forEach( input => {
    console.log(input);
    if( input.value.trim() === '' ){
      showError(input, getFieldName( input ))
    }else{
      showSuccess(input)
    }
  })
}

function getFieldName( input ){
  return `${input.id.charAt(0).toUpperCase()}${ input.id.slice(1) } is required`
}

form.addEventListener('submit', e => {
  e.preventDefault();
  checkRequired([username,email,password,password2])
})