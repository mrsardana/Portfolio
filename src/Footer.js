import React from 'react'
import { social } from './data'
const Footer = () => {
    return (
        <div>
            <div className="gradient"></div>
            <footer>
                <ul className='footer-icons'>
                    {
                        social.map((link) => {
                            const { id, url, icon } = link
                            return <li key={id}>
                                <a href={url} target="_blank" rel="noreferrer" >{icon}</a>
                            </li>
                        })
                    }
                </ul>
                <p>&copy; Copyright 2023 | All rights reserved</p>

            </footer>
        </div>
    )
}

export default Footer