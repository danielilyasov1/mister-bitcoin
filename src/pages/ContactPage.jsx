import React, { Component } from 'react'
import {contactService} from '../services/contactService'
import {ContactFilter} from '../cmps/ContactFilter.jsx'
import {ContactList} from '../cmps/ContactList.jsx'
import {DetailsPage} from '../pages/DetailsPage.jsx'


export default class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContectId: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onSelectContactId = (contactId) => {
        this.setState({ selectedContectId: contactId })
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts, selectedContactId } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <div className='contact-app'>
                {selectedContactId ?
                    <DetailsPage onBack={() => this.onSelectContactId(null)} contactId={selectedContactId} /> :
                    <>
                        <ContactFilter onChangeFilter={this.onChangeFilter} />
                        <ContactList onRemoveContact={this.onRemoveContact} onSelectContactId={this.onSelectContactId} contacts={contacts} />
                    </>
                }
            </div>
        )
    }
}
