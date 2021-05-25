import React from 'react'

export default function Slider({min,max,value,name}) {
    return (
        <div>
            <p>{name}</p>
            <span>{min}</span>
            <span>{value}</span>
            <input type="range" min={min} max={max} value={value} id={name}/>
        </div>
    )
}
