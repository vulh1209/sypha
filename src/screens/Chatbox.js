import React from "react";
import "../screens/Market.css";
import Menu2 from "../cpns/Menu2";
import Checkbox from "../cpns/Checkbox";
import Slider from "../cpns/Slider";
import Card2 from "../cpns/Card2";

import Sypha1 from "../imgs/Sypha1.svg";
import Sypha2 from "../imgs/Sypha2.svg";

import Sort from "../imgs/Sort.svg";

export default function Chatbox() {
  return (
    <div id="Chatbox">
      <Menu2 />
      <div id="Chatbox-body">
        <div id="Chatbox-body-left"></div>
        <div id="Chatbox-body-right"></div>
      </div>
    </div>
  );
}
