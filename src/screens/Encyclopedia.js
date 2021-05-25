import React from "react";
import Menu2 from "../cpns/Menu2";
import "../screens/Encyclopedia.css";

import Sort from "../imgs/Sort.svg";

export default function Encyclopedia() {
    return (
        <div id="Encyclopedia">
            <Menu2 />
            <div id="Encyclopedia-body">
                <div id="Encyclopedia-body-left">
                    <ul>
                        <li>
                            <div className="encyclopedia-node">
                                About Sipher
                            </div>
                            <ul>
                                <li>Abstract</li>
                                <li>Vision & Mission</li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                The playground
                            </div>
                            <ul>
                                <li>Main Story</li>
                                <li>Doge Agents</li>
                                <li>Mechanics</li>
                                <li>Items</li>
                                <li>Events</li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                technology
                            </div>
                            <ul>
                                <li>NFTs</li>
                                <li>AI</li>
                                <li>GAN</li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                Tokennomic
                            </div>
                            <ul>
                                <li>Sipher token</li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                roadmap
                            </div>
                            <ul>
                                <li>Phase 1</li>
                                <li>Phase 2</li>
                                <li>Phase n</li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                our team & partners
                            </div>
                            <ul>
                                <li>Sipher team & partners</li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                community channels
                            </div>
                            <ul>
                                <li>Sipher community</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="Encyclopedia-body-right">
                </div>
            </div>
        </div>
    )
}
