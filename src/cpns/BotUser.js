import React from "react";
import "../css/BotUser.css";
import styled from "styled-components";

const Bot = styled.div`
width: 20rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 5rem;
font-weight: normal;
background-color:${props => !props.Active ? "transparent" : "#1EF6F9"};
color: ${props => !props.Active ? "#DADADA" : "black"};
img{
  width: 4rem;
    height: 4rem;
    border-radius: 50%;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
}

`;

const Bot_Content = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
    width: 100%;
    padding: 0rem 1rem 0rem 0.5rem;
    flex: 1;
    height: 100%;
`;

const Bot_Content_Top = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
      padding: 0rem;
      margin: 0rem;
      font-size: 1rem;      
      color: ${props => !props.Active ? "#FCD11F" : "black"}; 
    }
    p {
      padding: 0rem;
      margin: 0rem;
    }
`;

const Bot_Content_Bot = styled.div`
padding: 0rem;
    margin: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default function BotUser({ bot_src, bot_name, last_line, time_ago, Active, setSelectedBot, bot }) {
  // const class_name = `botuser ${Active ? 'activebot' : 'unactivebot'}`
  return (
    <Bot id={bot_name} Active={Active} onClick={() => setSelectedBot({
        bot_name: bot_name,
        bot_src: bot_src,
        time_ago: time_ago,
        last_line: last_line
      })}>
      <img src={bot_src} alt="" />
      <Bot_Content>
        <Bot_Content_Top>
          <h3>{bot_name}</h3>
          <p>{time_ago}</p>
        </Bot_Content_Top>
        <Bot_Content_Bot>
          {last_line}
        </Bot_Content_Bot>
      </Bot_Content>
    </Bot>

    // <div id={bot_name} className={class_name} onClick={() => setSelectedBot({
    //   bot_name: bot_name,
    //   bot_src: bot_src,
    //   time_ago: time_ago,
    //   last_line: last_line
    // })}>
    //   <img src={bot_src} alt="" />
    //   <div>
    //     <div>
    //       <h3>{bot_name}</h3>
    //       <p>{time_ago}</p>
    //     </div>
    //     <p>{last_line}</p>
    //   </div>
    // </div>
  );
}
