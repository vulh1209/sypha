import React from "react";
import styled from "styled-components";

import BGChat from "../imgs/BGChat.svg";

const Wrap_Popup = styled.div`
margin-top: 1rem;
  background: linear-gradient(
    152.97deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 50vw;
  height: 30vh;
  border-radius: 1rem;
  border: 0.1rem solid white;
`;
const Title_Popup = styled.div`
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  span {
    color: yellow;
  }
`;
const Button_Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items: center;
  button{
    width: 40%;
    height:1rem;
    margin: 0.5rem 1rem;
    height: 2rem;
    background: rgba(30, 246, 249, 0.15);
    border: 2px solid #1EF6F9;
box-sizing: border-box;
border-radius: 2rem;
color:white;
  }
`;

export default function PopupChatbox() {
  return (
    <Wrap_Popup>
      <Title_Popup>
        start converstion with <span>jonh doge</span> or ask for...
      </Title_Popup>
      <Button_Container>
        <button>a joke</button>
        <button>investment advice</button>
        <button>a fortune-telling</button>
        <button>price alert service</button>
        <button>mini game</button>
        <button>hot deals</button>
      </Button_Container>
    </Wrap_Popup>
  );
}
