import React, { Component } from 'react'
import { userService } from '../services/userService'

export default class SignupPage extends Component {
    state = {
        user: null
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ [field]: value  }))
    }

    onSignup = async (ev) => {
        ev.preventDefault()
        await userService.signup( this.state.user )
        console.log(this.props);
        // this.props.userLoggedIn()
        this.props.history.push('/')
    }

    inputRefFunc = (elInput) => {
        elInput && elInput.focus()
    }
    
    render() {
        // const { user } = this.state
        // if (!user) return <div>Loading...</div>

        return (
            <form onSubmit={this.onSignup}>
                <label htmlFor="model">Enter your name:</label>
                {/* <input ref={this.inputRefFunc} value={user.name} onChange={this.handleChange} type="text" name="user" /> */}
                <input ref={this.inputRefFunc}  onChange={this.handleChange} type="text" name="user" />
                <button>Save</button>
            </form>
        )
    }
}
