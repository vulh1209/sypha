import React from "react";
import "../css/Market.css";
import MenuChatBox from "../cpns/MenuChatBox";
import BotUser from "../cpns/BotUser";

import Sypha1 from "../imgs/Sypha1.svg";
import Sypha2 from "../imgs/Sypha2.svg";
import Looker from "../imgs/Looker.svg";
import AddUser from "../imgs/AddUser.svg";

export default function Chatbox() {
  return (
    <div id="chatbox">
      <MenuChatBox />
      <div id="chatbox-body">
        <div id="chatbox-body-left">
          <div id="chatbox-body-left-top">
            <img src={Looker} alt="" />
            <input />
            <img src={AddUser} alt="" />
          </div>
          <div id="chatbox-body-botcontainer">
            <BotUser />
            <BotUser />
            <BotUser />
            <BotUser />
            <BotUser />
          </div>
        </div>
        <div id="chatbox-body-right"></div>
      </div>
    </div>
  );
}
