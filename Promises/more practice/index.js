//get users -> 'GET' https://jsonplaceholder.typicode.com/users
//get user -> 'GET' https://jsonplaceholder.typicode.com/users?id=1234
//get user -> 'GET' https://jsonplaceholder.typicode.com/users/12345
//create user -> 'POST' https://jsonplaceholder.typicode.com/users
//update(add smt new) user -> 'PUT' https://jsonplaceholder.typicode.com/users/1234
//delete user -> 'DELETE' https://jsonplaceholder.typicode.com/users/1234


const API = 'https://jsonplaceholder.typicode.com/'
let users = []
const container = document.querySelector('.users')

function getUsers() {
   return fetch(API + 'users/').then(res => {
       return res.json()
    }).catch(err => {
        console.log('Cant get users', err)
    })
}
function deleteUser(userId) {
   
       return fetch(API + 'users/' + userId, {
           method: 'DELETE'
       })
       .then(res => res.json())
    //    if (res.status ===200) {
    //        console.log('status: ', res.status)
    //    }
   .catch(err => {
       console.log('error: ', err)
   })
}
 

function renderUsers() {
    users.forEach(user => {
        const div = document.createElement('div')
        div.className = 'user'
        div.innerHTML = `
            <h4>${user.name}</h4>
            <h5>${user.email}</h5>
        `
        div.style.background = 'silver'
        div.style.textAlign = 'center'
        div.style.width = '300px'

        const btn = document.createElement('button')
        btn.innerText = 'X'

        btn.addEventListener('click', () => {
            deleteUser(user.id).then(() => {
                div.remove()
            })
        })
        div.append(btn)
        container.append (div)
    })
}

getUsers().then(data => {
    users = data
    console.log('users: ', users)
    renderUsers()
})
