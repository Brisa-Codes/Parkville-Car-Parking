const validateForm = () => {
    const username = document.getElementById('username')
    const usernameError = document.getElementById('usernameError')
    const password = document.getElementById('password')
    const passwordError = document.getElementById('passwordError')

    if(username.value == ""){
        username.style.border = "1px solid red"
        usernameError.textContent = "Please enter valid email"
        usernameError.style = "color: red"
        return false
    } else {
        username.style = "1px solid green"
        usernameError.textContent = ""
    }
    if(password.value == ""){
        password.style.border = "1px solid red"
        passwordError.textContent = "Please enter correct password"
        passwordError.style = "color: red"
        return false
    } else {
        password.style = "1px solid green"
        passwordError.textContent = ""
    }
}