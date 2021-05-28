import React, { useState, useEffect } from "react";
import "../css/Chatbox.css";
import MenuChatBox from "../cpns/MenuChatBox";
import BotUser from "../cpns/BotUser";

import Sypha1 from "../imgs/Sypha1.svg";
import Sypha2 from "../imgs/Sypha2.svg";
import Looker from "../imgs/Looker.svg";
import AddUser from "../imgs/AddUser.svg";
const { bots } = require("../data/bots")


export default function Chatbox() {
  const [Bots, setBots] = useState(bots)
  const [SelectedBot, setSelectedBot] = useState(bots[0])
  return (
    <div id="chatbox">
      <MenuChatBox />
      <div id="chatbox-body">
        <div id="chatbox-body-left">
          <div id="chatbox-body-left-top">
            <img src={Looker} alt="" />
            <input placeholder="Search ..." />
            <img src={AddUser} alt="" />
          </div>
          <div id="chatbox-body-left-botcontainer">
            {
              Bots.map((item) =>
                <BotUser
                  Active={item.bot_name === SelectedBot.bot_name}
                  bot_src={item.bot_src.Sypha1 ? item.bot_src.Sypha1 : item.bot_src.Sypha2}
                  bot_name={item.bot_name}
                  time_ago={item.time_ago}
                  last_line={item.last_line}
                  setSelectedBot={setSelectedBot}
                />
              )
            }
          </div>
        </div>
        <div id="chatbox-body-right">
          <div id="chatbox-body-right-top">
            <div className="botuser">
              <img src={SelectedBot.bot_src} alt="" />
              <div>
                <div>
                  <h3>{SelectedBot.bot_name}</h3>
                </div>
                <p>Online (As Always)</p>
              </div>
            </div>
          </div>
          <div id="chatbox-body-botcontainer">

          </div>
        </div>
      </div>
    </div>
  );
}
