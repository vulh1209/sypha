import React from 'react'
import "../css/Slider.css"

export default function Slider({ min, max, value, name }) {
    return (
        <div className="slider">
            <p>{name}</p>
            <div>
                <span>{min}</span>
                <span>{value}</span>
            </div>
            <input type="range" min={min} max={max} value={value} id={name} />
        </div>
    )
}
