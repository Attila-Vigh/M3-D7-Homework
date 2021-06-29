const $_ = (selector) => document.querySelector(selector);
const $_All = (selector) => document.querySelectorAll(selector);


window.addEventListener("load", () => {

    getUsers()
})

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userList = await response.json()
    console.log(userList);
    let users = $_("#users")

    userList.forEach(
    (user) => {
        console.log(user)
        users.innerHTML += `<p>${user.name}</p>`
    })


}