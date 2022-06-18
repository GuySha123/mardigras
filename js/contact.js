const form = document.querySelector('form');
const userName = document.getElementById('userName');
const userLastName = document.getElementById('userLastName');
const email = document.getElementById('email');


//Show Error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Succses
function showSuccses(input, message){
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

//prevent

//Prevent Submition
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(userName.value == ''){
        showError(userName,'Please Enter Name');
    }
    else{
        showSuccses(userName);
    }
    if(userLastName.value == ''){
        showError(userLastName,'Please Enter Last Name');
    }
    else{
        showSuccses(userLastName);
    }
    if(email.value == '' || email.value.indexOf('@') == -1){
        showError(email,'Please Enter Email');
    }
    else{
        showSuccses(email);
    }
    
})

