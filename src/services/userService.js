import { utilService } from './utilService.js'

export const userService = {
  getLoggedInUser,
  signup,
  addMove,
}

var loggedUser

const users = []

function getLoggedInUser() {
  return loggedUser
}

function signup(name) {
  const newUser = {
    _id: utilService.makeId(),
    name,
    coins: 100,
    moves: [],
  }
  users.push(newUser)
  loggedUser = newUser
  return loggedUser
}

function addMove(contact, amount) {
  const move = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  }
  loggedUser.moves.unshift(move)
}
