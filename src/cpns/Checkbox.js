import React from 'react'

import '../css/Checkbox.css'

export default function Checkbox({value,checked}) {
    return (
        <div id={value} className="checkbox">
            <input id='checkbox-input' type="checkbox" name={value} value={value} />
            <label for={value}>{value}</label>
        </div>
    )
}
