export const userService = {
    getUser,
    updateUserName,
   
}

var user = 
    {
        name: "Danielle Ilyasov",
        coins: 1000,
        moves:[]
    }


async function getUser() {
    return await user   
}

function updateUserName(newName) {
    return new Promise((resolve, reject) => {
        user.name = newName
        resolve(newName)
    })
}