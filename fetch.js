async function getTodos() {
    console.log('start slow 3g')
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (res.status !== 200) {
        console.error('fail')
    }
    console.log('res: ', res)

    const data = await res.json()
    console.log('data: ', data)
}
getTodos()

async function postTodos() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
        body: JSON.stringify({
            text: 'hello'
        })
    })
}
// postTodos()

async function multiplyRequests(){
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts/')
    posts = await posts.json()
        console.log('posts: ',posts)
    let users = await fetch('https://jsonplaceholder.typicode.com/users/')
    users = await users.json()
        console.log('users: ', users)
    let singleUser = await fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}`)
    singleUser = await singleUser.json()
        console.log('singleUser: ', singleUser)
}
multiplyRequests()