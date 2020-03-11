const user = {
    user: {
        name: 'Katya',
        age: 23,
        friends: [
            "Soyka"
        ]
    }
}

let jsonString = JSON.stringify(user)
console.log('jsonString: ', jsonString)

let userCopy = JSON.parse(jsonString)
console.log('userCopy: ', userCopy)

//глибокe копiювання JSON.parse(JSON.stringify(user)) 