import React, { Component } from 'react'
import {userService} from '../services/userService.js'
import {bitcoinService} from '../services/bitcoinService.js'

export default class HomePage extends Component {
  state ={
    user: null,
    rate:0,
  }

  componentDidMount(){
    this.loadUser()
    this.loadRate()
  }

  async loadUser(){
    try {
    const user = await userService.getUser()
    this.setState({user})
    } catch (err) {
      console.log('err:', err)
    }
  }

  async loadRate(){
    try {
    const rate = await bitcoinService.getRate()
    this.setState({rate})
    } catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    const {user,rate} = this.state
    if(!user) return <h1>loading..</h1>
    return (
      <>
        <h2>Hello {user.name}!</h2>
        <h4>💰 Coins: {user.coins}</h4>
        <div>BTC: {rate}</div>
      </>
    )
  }
}