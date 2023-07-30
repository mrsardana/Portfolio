import React from 'react';
import { images } from './data'
const imagePath = images[0].mainImage
const Intro = () => {
    return <section id='intro'>
        <div className='intro-details'>
            <p className='name'>Hello, I'm <span>Deepak Sardana</span></p>
            <h2>A Software Engineer</h2>
            <p>I have experience in creating Web and Mobile Apps.</p>
        </div>
        <div className='img-intro'>
            <img src={imagePath} alt="" />
        </div>

    </section>
}

export default Intro