const validateForm = () => {
    const username = document.getElementById('username')
    const usernameError = document.getElementById('usernameError')
    const email = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    const password = document.getElementById('password')
    const passwordError = document.getElementById('passwordError')
    const confirm = document.getElementById('confirm')
    const confirmError = document.getElementById('confirmError')

    if(username.value == ""){
        username.style.border = "1px solid red"
        usernameError.textContent = "Please enter your username"
        usernameError.style = "color: red"
        return false
    } else {
        username.style = "1px solid green"
        usernameError.textContent = ""
    }
    if(email.value == ""){
        email.style.border = "1px solid red"
        emailError.textContent = "Please enter your email"
        emailError.style = "color: red"
        return false
    } else {
        email.style = "1px solid green"
        emailError.textContent = ""
    }
    if(password.value == ""){
        password.style.border = "1px solid red"
        passwordError.textContent = "Please enter your password"
        passwordError.style = "color: red"
        return false
    } else {
        password.style = "1px solid green"
        passwordError.textContent = ""
    } 
    if(confirm.value == ""){
        confirm.style.border = "1px solid red"
        confirmError.textContent = "Please confirm your password"
        confirmError.style = "color: red"
        return false
    } else {
        confirm.style = "1px solid green"
        confirmError.textContent = ""
    }
}