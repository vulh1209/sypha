import React from 'react'
import '../css/Card.css';

import Border from '../imgs/Border.svg';

export default function Card({link}) {
    return (
        <div key={link} className='card'>
            <img className='card-img' src={link} alt={link}/>
            <img className='card-border' src={Border} alt={Border}/>
        </div>
    )
}
