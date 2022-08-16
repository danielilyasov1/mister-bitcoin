import React, { Component } from 'react'
import userImg from '../assets/img/user.png'
import { contactService } from '../services/contactService'
import { Link } from 'react-router-dom'
// import { MovesList } from '../cmps/MoveList.jsx'

export class DetailsPage extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onBack = () => {
        this.props.history.push('/')
        // this.props.history.goBack()
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
                {/* <button onClick={this.onRemoveContact(contact._id)}>Delete</button> */}

                {/* <MovesList title={'Your Moves:'} moves={moves} /> */}
            </div>
        )
    }
}
