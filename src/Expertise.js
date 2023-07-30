import React from 'react'
import Card from './Card'
import { expertise } from './data'

const Expertise = () => {
    return (
        <section className='container expertise-container'>
            <h1>Expertise</h1>
            <div className="underline"></div>
            <div className='expertise-item'>
                {
                    expertise.map((item) => {
                        return <Card key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default Expertise