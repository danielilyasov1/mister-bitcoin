export const userService = {
    getUser,
    signup,
    addMove,
}

var user = [
    {
        name: "Danielle Ilyasov",
        coins: 1000,
        moves:[]
    }
]

async function getUser() {
    return await user   
}

function signup(name) {
    const newUser = {
        _id: _makeId,
        name,
        coins: 100,
        moves:[]
    }
    return user.push(newUser)
}

function addMove(contact,amount){
    const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    }
    user[0].moves.unshift(move)
}

function _makeId(length = 5) {
    var txt = ""
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }