function chating(){
  let username = 'Carlos'
  var nickname = 'Charlie Leon'

  if(nickname === 'Charlie Leon'){
    console.log(`Hello ${username}!`)
  }
}

chating()

// This variables are only inside function scope.
// The code below generates an error.
console.log(nickname)
console.log(username)
