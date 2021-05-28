import React from "react";
import styled from "styled-components";
import MenuChatBox from "../cpns/MenuChatBox";
import BotUser from "../cpns/BotUser";

import PopupChatbox from "../cpns/PopupChatbox";

import Looker from "../imgs/Looker.svg";
import AddUser from "../imgs/AddUser.svg";
import Sypha1 from "../imgs/Sypha1.svg";
import Sypha2 from "../imgs/Sypha2.svg";

import BGChat from "../imgs/BGChat.svg";

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
  width: 20vw;
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
  width: 19vw;
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
`;
const Chat_Right_Editor = styled.div``;

export default function Chatbox2() {
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
            <BotUser
              bot_src={Sypha1}
              bot_name="Mary"
              time_ago="1m ago"
              last_line="hello Vũ"
            />
            <BotUser
              bot_src={Sypha2}
              bot_name="Tom"
              time_ago="5h ago"
              last_line="Chào Vũ"
            />
            <BotUser
              bot_src={Sypha2}
              bot_name="John"
              time_ago="5h ago"
              last_line="Chào Vũ"
            />
            <BotUser
              bot_src={Sypha1}
              bot_name="NFT group"
              time_ago="5h ago"
              last_line="Hi all"
            />
          </Chat_Left_Bots>
        </Chat_Left>
        <Chat_Right>
          <Chat_Right_Top>
            <div className="botuser">
              <img src={Sypha1} alt="" />
              <div>
                <div>
                  <h3>"Mary"</h3>
                </div>
                <p>Online (as always)</p>
              </div>
            </div>
          </Chat_Right_Top>
          <Chat_Right_Content>
              <PopupChatbox/>
          </Chat_Right_Content>
          <Chat_Right_Editor></Chat_Right_Editor>
        </Chat_Right>
      </Chat_Body>
    </Wrap>
  );
}
