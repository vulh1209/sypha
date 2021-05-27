import React from "react";

export default function BotUser({ bot_src, bot_name, last_line, time_ago }) {
  return (
    <div>
      <img src={bot_src} alt="" />
      <div>
        <h3>{bot_name}</h3>
        <p>{time_ago}</p>
      </div>
      <p>{last_line}</p>
    </div>
  );
}
