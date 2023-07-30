import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { links, social } from './data'
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    return <nav>
        <div className="nav-center">
            <div className="nav-header">
                <h1><a href="/">Deepak Sardana</a> </h1>

                <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>{showLinks ? <RxCross1 /> : <FaBars />}</button>
            </div>
            <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                <ul className='links'>
                    {
                        links.map((link) => {
                            const { id, url, text } = link
                            return <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
            <ul className='social-icons'>
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
    </nav>
}

export default Navbar