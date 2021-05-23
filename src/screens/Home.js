import React from 'react'
import Menu from '../cpns/Menu'
import '../screens/Home.css';
import Line from '../imgs/Line.svg';
import Avatar from '../imgs/Avatar.svg';
import MainStory from '../imgs/MainStory.svg';
import Card from '../cpns/Card'

export default function Home() {
    return (
        <div id='home'>
            <div id='banner'>
                <Menu />
                <div id='banner-div'>
                    <div id='banner-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <a id='banner-a' href='#'>
                        GET A SYPHA
                    </a>
                </div>
            </div>
            <div id='mainstory'>
                <div>
                    <div>
                        <p className='titlefont'>THE MAIN STORY</p>
                        <img src={Line} alt='Line' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <img src={MainStory} alt='MainStory' />

            </div>
            <div id='dogeagent'>
                <div id='dogeagent-title'>
                    <p className='titlefont'>DOGE AGENTS</p>
                    <img src={Line} alt='Line' />
                </div>
                <div id='dogeagent-cards'>
                    <Card link={Avatar} />
                    <Card link={Avatar} />
                    <Card link={Avatar} />
                    <Card link={Avatar} />
                    <Card link={Avatar} />
                </div>
            </div>
            <div id='gameplay'></div>
        </div>
    )
}
