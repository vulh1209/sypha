import React from 'react'

export default function ClanCard({src,name,price,description}) {
    return (
        <div>
            <img src={src} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}
