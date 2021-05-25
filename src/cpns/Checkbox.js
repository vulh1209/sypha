import React from 'react'

import '../cpns/Checkbox.css'

export default function Checkbox({value,checked}) {
    return (
        <div className="checkbox">
            <input type="checkbox" name={value} value={value} />
            <label for={value}>{value}</label>
        </div>
    )
}
