import React from 'react'
import '../cpns/Menu.css';

export default function Menu2() {
    return (
        <div className="menu menu2">
            <ul>
                <li><button>PROJECT LOGO</button></li>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>MARKETPLACE</a></li>
                <li><a href='#'>LEADERBOARD</a></li>
                <li><a href='#'>ENCYCLOPEDIA</a></li>
                <li><button className="border50">CONNECT WALLET</button></li>
            </ul>
        </div>
    )
}
