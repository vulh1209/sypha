import React from 'react'

export default function MiniCard({src,card_title,card_description}) {
    return (
        <div key={card_title}>
            <img src={src} alt =""/>
            <h3>{card_title}</h3>
            <div>{card_description}</div>
        </div>
    )
}
