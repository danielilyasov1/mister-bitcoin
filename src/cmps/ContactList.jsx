import React from 'react'
import {ContactPreview} from './ContactPreview.jsx'

export function ContactList({ contacts }) {
    return (
        <ul className='contact-list simple-cards-grid'>
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)}
        </ul>
    )
}