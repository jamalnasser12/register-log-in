const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signin');
const signUnForm=document.getElementById('signup');


signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUnForm.style.display="block";
})

signInButton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUnForm.style.display="none";
})
