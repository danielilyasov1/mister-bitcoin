import React, { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    name:'',
    phone:'',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? (+target.value || '') : target.value
    this.setState({ [field]: value }, () => {
        this.props.onChangeFilter({ ...this.state })
    })
  }

  render() {
    const {name, phone} = this.state
    return (
      <form className='filter'>
          <input value={name} placeholder="Search contact by name..." onChange={this.handleChange} type="text" name="name" id="name" />   
          <input value={phone} placeholder="Search contact by phone..." onChange={this.handleChange} type="number" name="phone" id="phone" />
      </form>
    )
  }
}
