import React from "react";
import "../css/Chatbox.css";
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
            <input placeholder="Search ..."/>
            <img src={AddUser} alt="" />
          </div>
          <div id="chatbox-body-botcontainer">
            <BotUser bot_src={Sypha1} bot_name="Mary" time_ago="1m ago" last_line="hello Vũ"/>
            <BotUser bot_src={Sypha2} bot_name="Tom" time_ago="5h ago" last_line="Chào Vũ"/>
            <BotUser bot_src={Sypha2} bot_name="John" time_ago="5h ago" last_line="Chào Vũ"/>
            <BotUser bot_src={Sypha1} bot_name="NFT group" time_ago="5h ago" last_line="Hi all"/>
          </div>
        </div>
        <div id="chatbox-body-right"></div>
      </div>
    </div>
  );
}
