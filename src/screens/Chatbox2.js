import React, { useState } from "react";

import styled from "styled-components";
import MenuChatBox from "../cpns/MenuChatBox";
import BotUser from "../cpns/BotUser";
import PopupChatbox from "../cpns/PopupChatbox";

import Looker from "../imgs/Looker.svg";
import AddUser from "../imgs/AddUser.svg";
import BGChat from "../imgs/BGChat.svg";

import icoSubmit from "../imgs/icons/icoSubmit.svg";
import icoIcon from "../imgs/icons/icon.svg";
import icoImg from "../imgs/icons/img.svg";
import icoFile from "../imgs/icons/file.svg";
import icoQr from "../imgs/icons/qr.svg";
import icoMic from "../imgs/icons/mic.svg";
import icoAction from "../imgs/icons/action.svg";

const { bots } = require("../data/bots")

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  color: #fcd11f;
  height: 100vh;
`;
const Chat_Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex: 1;
`;
const Chat_Left = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  margin-top: -0.2rem;
  background: #212035;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
`;
const Chat_Left_Top = styled.div`
  padding-top: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  input {
    background-color: transparent;
    border: 0rem 0rem 0.1 rem 0rem solid white;
    width: 11vw;
  }
`;
const Chat_Left_Bots = styled.div`
  flex: 1;
  width: 100%;
`;
const Chat_Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  background-image: url(${BGChat});
  width: 100%;
  height: 100%;
`;
const Chat_Right_Top = styled.div``;
const Chat_Right_Content = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
flex:1;
`;
const Chat_Right_Editor = styled.div`
width: 100%;
height: 8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background-color: rgba(255, 255, 255, 0.05);
hr{
  width:100%;  
}
`;
const Chat_Right_Editor_Header = styled.div`
width: 100%;
height: 3rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
img{
  padding-left:1rem;
}
`;
const Chat_Right_Editor_Body = styled.div`
width: 100%;
height: 5rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
input{
width: 91%;
height: 2.5rem;
background-color: rgba(255, 255, 255, 0.1);
border: 0.1rem solid #FCD11F;
}
`;

export default function Chatbox2() {
  const [Bots, setBots] = useState(bots)
  const [SelectedBot, setSelectedBot] = useState(bots[0])
  const placeholdertext = `Chat with ${SelectedBot.name}`
  return (
    <Wrap>
      <MenuChatBox />
      <Chat_Body>
        <Chat_Left>
          <Chat_Left_Top>
            <img src={Looker} alt="" />
            <input placeholder="Search ..." />
            <img src={AddUser} alt="" />
          </Chat_Left_Top>
          <Chat_Left_Bots>
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
          </Chat_Left_Bots>
        </Chat_Left>
        <Chat_Right>
          <Chat_Right_Top>
            {/* <div className="botuser">
              <img src={SelectedBot.bot_src.Sypha1 ? SelectedBot.bot_src.Sypha1 : SelectedBot.bot_src} alt="" />
              <div>
                <div>
                  <h3>{SelectedBot.bot_name}</h3>
                </div>
                <p>Online (As Always)</p>
              </div>
            </div> */}
            <BotUser
              bot_src={SelectedBot.bot_src.Sypha1 ? SelectedBot.bot_src.Sypha1 : SelectedBot.bot_src}
              bot_name={SelectedBot.bot_name}
              time_ago=""
              last_line="Online (As Always)"
            />
          </Chat_Right_Top>
          <Chat_Right_Content>
            <PopupChatbox />
          </Chat_Right_Content>
          <Chat_Right_Editor>
            <Chat_Right_Editor_Header>
              <img src={icoIcon} alt="" />
              <img src={icoImg} alt="" />
              <img src={icoFile} alt="" />
              <img src={icoMic} alt="" />
              <img src={icoQr} alt="" />
              <img src={icoAction} alt="" />
            </Chat_Right_Editor_Header>
            <hr />
            <Chat_Right_Editor_Body>
              <input placeholder={placeholdertext} />
              <img src={icoSubmit} alt="" />
            </Chat_Right_Editor_Body>
          </Chat_Right_Editor>
        </Chat_Right>
      </Chat_Body>
    </Wrap>
  );
}
