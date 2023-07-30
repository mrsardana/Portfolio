import React from 'react'

const Card = ({ icon, type, txt }) => {
    return (
        <div className="card">
            <div className="card-container">
                <span>{icon}</span>
                <h4>{type}</h4>
                <div className="underline"></div>
                <p>{txt}</p>
            </div>
        </div>
    )
}

export default Card