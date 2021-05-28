import React from "react";
import "../css/BotUser.css";

export default function BotUser({ bot_src, bot_name, last_line, time_ago,Active, setSelectedBot, bot }) {
  const class_name = `botuser ${Active?'activebot':'unactivebot'}`
  return (
    <div id={bot_name} className={class_name} onClick={() => setSelectedBot({
      bot_name: bot_name,
      bot_src: bot_src,
      time_ago: time_ago,
      last_line: last_line
    })}>
      <img src={bot_src} alt="" />
      <div>
        <div>
          <h3>{bot_name}</h3>
          <p>{time_ago}</p>
        </div>
        <p>{last_line}</p>
      </div>
    </div>
  );
}
