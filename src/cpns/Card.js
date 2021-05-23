import React from 'react'
import '../cpns/Card.css';

import Border from '../imgs/Border.svg';

export default function Card({link}) {
    return (
        <div className='card'>
            <img className='card-img' src={link} alt={link}/>
            <img className='card-border' src={Border} alt={Border}/>
        </div>
    )
}
