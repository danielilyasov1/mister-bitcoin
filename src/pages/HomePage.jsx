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
    const user = await userService.getUser()
    this.setState({user})
  }

  async loadRate(){
    const rate = await bitcoinService.getRate()
    this.setState({rate})
  }

  render() {
    const {user,rate} = this.state
    if(!user) return <h1>loading..</h1>
    return (
      <>
        <div>Name: {user.name}</div>
        <div>Coins: {user.coins}</div>
        <div>Current Bitcoin rate: {rate}</div>
      </>
    )
  }
}