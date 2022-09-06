import React, { Component } from 'react'
import userImg from '../assets/img/user.png'
import { contactService } from '../services/contactService'
import { Link } from 'react-router-dom'
import {TransferFund} from '../cmps/TransferFund.jsx'
// import { MovesList } from '../cmps/MoveList.jsx'

export class DetailsPage extends Component {

    state = {
        contact: null
    }


    onRemoveContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.props.history.push('/contact')
    }

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onBack = () => {
        this.props.history.push('/')
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

                <button onClick={this.onBack}>Back</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                <button onClick={() => {this.onRemoveContact(contact._id)}}>Delete</button>
                <TransferFund contact={contact} />
                {/* <MovesList title={'Your Moves:'} moves={moves} /> */}
            </div>
        )
    }
}
