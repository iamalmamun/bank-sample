// step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step:2 get the email address inside the email input field
    // always remember to use value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step:3 get the password inside the password field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    window.location.href = 'bank.html'
    console.log(email, password);
})