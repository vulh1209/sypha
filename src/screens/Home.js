import React, { useState } from 'react';

import Menu2 from "../cpns/Menu2";
import SubMenu from "../cpns/SubMenu";
import "../screens/Home.css";
import Line from "../imgs/Line.svg";
import Avatar from "../imgs/Avatar.svg";
import MainStory from "../imgs/MainStory.svg";
import Card from "../cpns/Card";

import Pic1 from "../imgs/Pic1.svg";
import Pic2 from "../imgs/Pic2.svg";
// import Pic3 from "../imgs/Pic3.svg";

export default function Home() {
    const [PicPick, setPicPick] = useState(Pic1)
    const [PicList, setPicList] = useState([Pic1,Pic2])
  return (
    <div id="home">
      <div id="banner">
        <Menu2 />
        <div id="banner-div">
          <div id="banner-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a id="banner-a" href="#">
            GET A SYPHA
          </a>
        </div>
      </div>
      <div id="mainstory">
        <div>
          <div>
            <p className="titlefont">THE MAIN STORY</p>
            <img src={Line} alt="Line" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <img src={MainStory} alt="MainStory" />
      </div>
      <div id="dogeagent">
        <div id="dogeagent-title">
          <p className="titlefont">DOGE AGENTS</p>
          <img src={Line} alt="Line" />
        </div>
        <div id="dogeagent-cards">
          <Card link={Avatar} />
          <Card link={Avatar} />
          <Card link={Avatar} />
          <Card link={Avatar} />
          <Card link={Avatar} />
        </div>
      </div>
      <div id="gameplay">
        <div id="gameplay-title">
          <p className="titlefont">GAMEPLAY</p>
          <img src={Line} alt="Line" />
        </div>
        <div id="gameplay-menu">
          <SubMenu />
        </div>
        <div id="gameplay-gallery">
          <img src={PicPick} alt=''/>
          <div>
            <div>
              <img  src={PicList[0]} onClick={()=>setPicPick(PicList[0])} alt=''/>
              <img  src={PicList[1]} onClick={()=>setPicPick(PicList[1])} alt=''/>
            </div>
            <div>
              <img  src={PicList[1]} onClick={()=>setPicPick(PicList[1])} alt=''/>
              <img  src={PicList[0]} onClick={()=>setPicPick(PicList[0])} alt=''/>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'></div>
    </div>
  );
}
