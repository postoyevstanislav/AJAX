// const API = 'https://jsonplaceholder.typicode.com/'

            // Without Promise

// setTimeout(() => {
//     console.log('hello')
//     setTimeout(() => {
//         console.log('how are you?')
//         setTimeout(() => {
//             console.log('are you here?')
//             setTimeout(() => {
//                 console.log('thanks God')
//             }, 3000)
//         }, 3000)
//     }, 3000)
// }, 2000)

// pending(виконується) -> resolved or reject

function defer(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds*1000);
    })
}

            //Using Promise

// defer(2).then(() => {
//     console.log('hello')
//     return defer(3)
// }).then(() => {
//     console.log('how are you?')
//     return defer(2)
// }).then(() => {
//     console.log('are you here?')
//     return defer(1)
// }).then(() => {
//     console.log(`I'm alone, probably :(`)
// })

            //Using async await

// async function dialog() {
    
//         await defer(2)
//         console.log('hello')
//         await defer(3)
//         console.log('how are you?')
//         await defer(2)
//         console.log('are you here?')
//         await defer(1)
//         console.log(`I'm alone, probably :(`)
// }

// dialog()

function ownFetch(url) {
    return new Promise((resolve, reject)=> {

        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        
        xhr.addEventListener('load', (event) => {
            resolve(xhr.response)
        })
        xhr.addEventListener('error', (err) => {
            reject(err)
        })
        
        xhr.send()
    })
}

// async function getSmth() {
//     const res = await ownFetch('https://jsonplaceholder.typicode.com/')
//     console.log('res: ', res.substring(0, 21))
// }

// getSmth()

ownFetch('https://jsonplaceholder.typicode.com/')
.then((res) => {
    console.log('first res')
    return ownFetch('https://google.com')
})
.then((res) => {
    console.log('second res')
})
.catch((err) => {
    console.log('Catch err: ', err)
})
.finally(() => {
    console.log('always called')
})
