import React from 'react'
import { useState } from 'react'
import { social } from './data'
import Alert from './Alert'
import { images } from './data'
const imagePath = images[0].myImage
const ContactMe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !phone || !message) {
            //display alert
            showAlert(true, '*All fields are mandatory', 'danger')
            console.log('empty')
        }
        else {
            showAlert(true, '*Your message has been sent', 'success')
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
        }
    }

    const showAlert = (show = false, msg = '', type = '') => {
        setAlert({ show, msg, type })
    }

    return (

        <section id="contact">
            <div className='contact-container'>
                <div>
                    <h2>About me</h2>
                    <div className='underline'></div>
                    <img src={imagePath} alt="Deepak" className='aboutImage' />

                    <p>I'm a Software Engineer with almost 3 years of professional experience in the software development,
                        working on diverse projects that have honed my skills in web and mobile application development.
                        Proficient in HTML, CSS, JavaScript, Dart plus modern libraries and frameworks like React, React-Native and Flutter.</p>
                </div>
                <div>
                    <h3>Social Links</h3>
                    <div className='underline'></div>
                    <ul className='contact-icons'>
                        {
                            social.map((link) => {
                                const { id, url, icon } = link
                                return <li key={id}>
                                    <a href={url} target="_blank" rel="noreferrer" >{icon}</a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='contact-container'>
                <div>
                    <h2>Contact Me</h2>
                    <div className='underline'></div>

                </div>
                {
                    alert.show && <Alert {...alert} removeAlert={showAlert} />
                }
                <form onSubmit={handleOnSubmit} className='form'>
                    <div className='form-control'>

                        <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="number" value={phone} placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                        <textarea rows="8" type='text' value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
                        <button type='submit' className='btn-contact' onClick={null}>Contact Me</button>

                    </div>

                </form>

            </div>

        </section>
    )
}

export default ContactMe