import React from "react";
import Menu2 from "../cpns/Menu2";
import "../screens/Market.css";
import Checkbox from "../cpns/Checkbox";
import Slider from "../cpns/Slider";
import Card2 from "../cpns/Card2";

import Sypha1 from "../imgs/Sypha1.svg";
import Sypha2 from "../imgs/Sypha2.svg";

import Sort from "../imgs/Sypha1.svg";

export default function Market() {
  return (
    <div id="market">
      <Menu2 />
      <div id="market-body">
        <div id="market-body-left">
          <div id="bgBuySell">
            <button className="btnActive">BUY</button>
            <button className="btnDeactive">SELL</button>
          </div>
          <input id="searchnft" />
          <div className="groupcheckbox">
            <p>CLAN</p>
            <Checkbox value="Origin sypha" checked="checked" />
            <Checkbox value="Samurai" checked="checked" />
            <Checkbox value="Cosmo" checked="checked" />
            <Checkbox value="Outlaw" checked="checked" />
            <Checkbox value="Crypto" checked="checked" />
          </div>
          <div className="groupcheckbox">
            <p>CLASS</p>
            <Checkbox value="Fighter" checked="checked" />
            <Checkbox value="Berserker" checked="checked" />
            <Checkbox value="Wizard" checked="checked" />
            <Checkbox value="Paladin" checked="checked" />
            <Checkbox value="Bard" checked="checked" />
          </div>
          <div>
            <Slider min="0" max="1" name="PRICE" />
            <Slider min="0" max="1500" name="HP" />
            <Slider min="0" max="1500" name="MP" />
            <Slider min="0" max="1500" name="STRENG" />
            <Slider min="0" max="1500" name="DEX" />
          </div>
        </div>
        <div id="market-body-right">
          <div id="market-body-right-filter">
            <p>Result (200)</p>
            <img src={Sort} alt="" />
          </div>
          <div id="market-body-right-content">
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card2 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
          </div>
          <div id="market-body-right-page"></div>
        </div>
      </div>
    </div>
  );
}
