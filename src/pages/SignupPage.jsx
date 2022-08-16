import React, { Component } from 'react'
import { userService } from '../services/userService'

export default class SignupPage extends Component {
    state = {
        user: null
    }

    async componentDidMount() {
        const user = userService.getUser()
        this.setState({ user })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await userService.updateUserName({ ...this.state.user })
        this.props.history.push('/')
    }

    inputRefFunc = (elInput) => {
        elInput && elInput.focus()
    }
    
    render() {
        const { user } = this.state
        if (!user) return <div>Loading...</div>

        return (
            <form onSubmit={this.onSaveContact}>
                <label htmlFor="model">Full Name:</label>
                <input ref={this.inputRefFunc} value={user.name} onChange={this.handleChange} type="text" name="name" />
                <button>Save</button>
            </form>
        )
    }
}
