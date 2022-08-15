import userImg from '../assets/img/user.png'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {

    return (
        <div className='contact-preview'>
            <Link to={`/contact/${contact._id}`} className='info'>
                <img src={userImg} alt='user img' height={40} width={40}/>
                <h2>{contact.name}</h2>
            </Link>

        </div>
    )
}
