import React from 'react'

import '../cpns/Card2.css'

export default function Card3({src,name,price,id}) {
    return (
        <div>
            <div className="cardbg">
                <div>{id}</div>
                <img src={src} alt=''/>
                <h3>{name}</h3>
                <p>{price} ETH</p>
                <hr/>
                <a href='#'>View profile</a>
            </div>
        </div>
            
    )
}
