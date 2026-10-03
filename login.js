let userNameInput = document.querySelector('.username')
let passInput = document.querySelector('.password')

let usernameMessage = document.querySelector('.username-validation')
let passMessage = document.querySelector('.password-validation')

function userNameValidation(){
    
    if (userNameInput.value.length < 12) {
        usernameMessage.innerHTML='Must Contain 12 Charachter (Min)'
        usernameMessage.style.color = 'rgb(223,28,28)'
        usernameMessage.style.display = 'block'
    } else {
        usernameMessage.innerHTML='Correct username value '
        usernameMessage.style.color = 'green'
        usernameMessage.style.display = 'inline'
    }
}

function passValidation(){
    
    if (userNameInput.value.length < 8) {
        passMessage.innerHTML='Must Contain 8 Charachter (Min)'
        passMessage.style.color = 'rgb(223,28,28)'
        passMessage.style.display = 'block'
    } else {
        passMessage.innerHTML='Correct password value '
        passMessage.style.color = 'green'
        passMessage.style.display = 'inline'
    }
}

