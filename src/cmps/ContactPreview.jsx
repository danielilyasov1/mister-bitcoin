import userImg from '../assets/img/user.png'

export function ContactPreview({ contact, onSelectContactId }) {

    return (
        <div className='contact-preview'>
            <section onClick={() => onSelectContactId(contact._id)} className='info'>
                <img src={userImg} alt='user img' height={40} width={40}/>
                <h2>{contact.name}</h2>
            </section>

        </div>
    )
}
