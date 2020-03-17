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
  if(re.test(String(email.value.trim()).toLowerCase())){
    showSuccess( email )
  }else{
    showError( email, 'Email is not valid' )
  }
}

function checkRequired(inputs){
  inputs.forEach( input => {
    if( input.value.trim() === '' ){
      showError(input, getFieldName( input, 'is required.' ))
    }else{
      showSuccess(input)
    }
  })
}

function getFieldName( input, msg ){
  return `${input.id.charAt(0).toUpperCase()}${ input.id.slice(1) } ${ msg }`
}

function checkLength( input, min, max ){
  if( input.value.length < min ){
    showError( input, getFieldName( input,`At least ${min} characters.` ) )
  }else if( input.value.length > max ){
    showError( input, getFieldName( input,`Max ${max} characters.` ) )
  }else{
    showSuccess(input)
  }
}

function checkPasswordsMatch( password,password2 ){
  if( password.value !== password2.value ){
    showError( password2, 'Passwords do not match.' )
  }
}


form.addEventListener('submit', e => {
  e.preventDefault();
  checkRequired([username,email,password,password2])
  checkLength( username, 3, 6 )
  checkLength( password, 4, 25 )
  isValidEmail( email )
  checkPasswordsMatch( password,password2 )
})