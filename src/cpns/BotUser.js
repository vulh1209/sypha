import React from "react";
import "../css/BotUser.css";

export default function BotUser({ bot_src, bot_name, last_line, time_ago }) {
  return (
    <div className="botuser">
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
