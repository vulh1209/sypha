import React from 'react'

import '../cpns/Card2.css'

export default function Card2({src,name,price,id}) {
    return (
        <div>
            <div className="cardbg">
                <div>{id}</div>
                <img src={src} alt=''/>
                <p>{name}</p>
                <p>{price} ETH</p>
                <hr/>
                <a href='#'>View profile</a>
            </div>
        </div>
    )
}
