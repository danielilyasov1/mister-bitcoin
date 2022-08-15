import React, { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    term:'',

  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value 
    this.setState({ [field]: value }, () => {
        this.props.onChangeFilter({ ...this.state })
    })
  }

  render() {
    const {term} = this.state
    return (
      <form className='filter'>
          <input value={term} placeholder="Search contact by name..." onChange={this.handleChange} type="text" name="term"/>   
      </form>
    )
  }
}
