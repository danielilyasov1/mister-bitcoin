import React, { Component } from 'react'
import userImg from '../assets/img/user.png'
import { contactService } from '../services/contactService'

export class DetailsPage extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.contactId)
        this.setState({ contact })
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-details'>
                <img src={userImg} alt='user img' height={40} width={40}/>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <h2>{contact.phone}</h2>
                
                <button onClick={this.props.onBack}>Back</button> 
            </div>
        )
    }
}
