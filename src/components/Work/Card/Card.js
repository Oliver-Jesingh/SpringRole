import React from 'react'
import { Image } from 'react-bootstrap'
import './Card.scss'

const Card = ( props ) => {
    return (
        <div className="card-wrapper py-md-5 py-4">
            <Image className="card-icon pb-5" src={props.iconUrl} />
            <p className="card-heading pb-3">{props.heading}</p>
            <p className="card-description">{props.description}</p>
        </div>
    )
}

export default Card;