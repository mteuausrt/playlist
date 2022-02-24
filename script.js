const formButton = document.querySelector('#form-button');
const formUsername = document.querySelector('#form-username');
const formEmail = document.querySelector('#form-email');
const formPassword = document.querySelector('#form-password');
const formConfirmPassword = document.querySelector('#form-confirm-password');
const formContainer = document.querySelector('#form-container');
const successfulContainer = document.querySelector('#successful-container');
const returnButton = document.querySelector('#return-button');


formButton.addEventListener('click', () => {
  formValidator()
});

returnButton.addEventListener('click', () => {
  checkStatus()
})


function formValidator(){
  checkUsername(formUsername);
  checkEmail(formEmail);
  checkPassword(formPassword, formConfirmPassword);
  checkStatus();
}

checkEmail = (email) => {

  let msgErr = false
 

  if(email.value == ""){
    msgErr = " is required"
    display(email, msgErr)
  }
  else if(email.value.includes('@') == false || email.value.includes('.com') == false){
    msgErr = " is invalid"
    display(email,msgErr)
  }

  display(email, msgErr)

  return true

}



checkUsername = (user) => {
  let msgErr = checkLength(user.value, 3, 15);

  display(user, msgErr)
  
}

checkPassword = (password, confirmPassword) => {
  let msgErr = false
  msgErr = checkLength(password.value, 5, 20);
  display(password, msgErr)

  if(confirmPassword.value == ""){
    let msgConfirmError = " can't be empty"
    display(confirmPassword, msgConfirmError)
  }

  if(!msgErr){

    if(password.value === confirmPassword.value){
       display(confirmPassword, msgErr)
       display(password, msgErr)
       return true
    }else{
      msgErr = ` do not match`
      display(confirmPassword, msgErr)
    }

  }
}

function display(input, err){
  if(err){
    input.parentElement.children[2].innerText = cap(input.name)+err
    toggleClassStatus(input, err)
  }else{
    input.parentElement.children[2].innerText = ""
    toggleClassStatus(input, err)
  }
}

function toggleClassStatus(input, err){
  if(err){
    input.classList.remove('accepted')
    input.classList.add('error')
  }

  else{
    input.classList.remove('error')
    input.classList.add('accepted')
  }

}



function checkLength(input, min, max){
  
  let err;

  if(input.length == "" || input == null){
    err = ` can't be empty`
    return err
  }
  

  else if(input.length < min){
    err = ` must be at least ${min} characters`
    return err
  }

  else if(input.length > max){
    err = ` must be less than ${max} characters`
    return err
  }

  return false
}

function checkStatus(){

  if(formContainer.classList[1] == "finished"){
    location.reload();
  }else{
    let acceptedStatus = document.querySelectorAll('.accepted');
  
    if(acceptedStatus.length == 4){
      formContainer.style.display = 'none';
      successfulContainer.style.display = 'flex';
      formContainer.classList.add('finished')
    }
  }

  
}

function cap(string) {
  return `${string.charAt(0).toUpperCase() + string.slice(1) }`;
}

function gameOver(){
  formUsername.value = "MuriloSCF10";
  formEmail.value = "murilo@gmail.com";
  formPassword.value = "123456";
  formConfirmPassword.value = "123456";
}