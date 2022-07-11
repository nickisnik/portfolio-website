import React, {useState} from 'react'
import './Contact.css'
import axios from 'axios'
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://contact-api-nick.herokuapp.com/contact', {
            name: name,
            email: email,
            message: message 
        })
        .then(() => console.log('done:)'))
        .catch((err) => console.log(err))
        setName('');
        setEmail('')
        setMessage('')
    }

  return (
    <div className='contact-wrapper'>
        <div className="form-wrapper">
            <div className="form-content">
                <header className="contact-header">
                    <span className='contact-title'>CONTACT<br/> ME</span>
                    <span className='contact-info'>TEL: 0783 2783 000</span>
                    <span className='contact-info'><a href="mailto:nikita.nikolenko@gmail.com">NIKITA.NIKOLENKO@GMAIL.COM</a></span>
                </header>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <input onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" placeholder='NAME' />
                    <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder='EMAIL' />
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="textarea" id="textarea" placeholder='MESSAGE'></textarea>
                    <button className='form-btn' type="submit">SEND</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact