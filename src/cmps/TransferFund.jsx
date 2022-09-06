import React, { Component } from 'react'
import {userService} from '../services/userService'
export class TransferFund extends Component {
  state = {
    amount: 0,
  }

  onTransferMoney = async () => {
    const { amount } = this.state
    const user = userService.getLoggedInUser
    if (!amount) return
    if(user.coins < amount){
      alert('You dont have enough money!')
            return
    }
    // UserService.addMove(contact, amount)
  }

  handleChange = ({ target }) => {
    var field = target.name
    var value = target.type === 'number' ? +target.value : target.value
    this.setState({ [field]: value })
  }

  render() {
    const contact = this.props.contact
    const { amount } = this.state
    return (
      <section className='transfer'>
                <form onSubmit={this.onTransferMoney}>
                    <h4>Transfer coins to {contact.name}</h4>
                    <input onChange={this.handleChange} value={amount} type="text" name="amount" />
                    <button>Transfer</button>
                </form>
            </section>
    )
  }
}
