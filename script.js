const $_ = (selector) => document.querySelector(selector);
const $_All = (selector) => document.querySelectorAll(selector);



window.addEventListener("load", () => {

    getUsers()
})

const displayUserProperty = (button, userList, prop) => {
    const displayUsers = $_("#users")
    
    button.addEventListener("click", ( ) =>{
        displayUsers.innerHTML = ""
        userList.forEach(( user ) =>
            displayUsers.innerHTML += `<p>${ user[prop] }</p>`) 
    })
}
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userList = await response.json()
    console.log(userList);
    // let users = 

    const buttonName = $_("#btn-name")
    const buttonUserName = $_("#btn-user-name")
    const buttonEmail = $_("#btn-email")

    displayUserProperty(buttonName, userList, "name")
    displayUserProperty(buttonUserName, userList, "username")
    displayUserProperty(buttonEmail, userList, "email")

}

