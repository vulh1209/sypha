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
                                <li><a>Abstract</a></li>
                                <li><a>Vision & Mission</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                The playground
                            </div>
                            <ul>
                                <li><a>Main Story</a></li>
                                <li><a>Doge Agents</a></li>
                                <li><a>Mechanics</a></li>
                                <li><a>Items</a></li>
                                <li><a>Events</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                technology
                            </div>
                            <ul>
                                <li><a>NFTs</a></li>
                                <li><a>AI</a></li>
                                <li><a>GAN</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                Tokennomic
                            </div>
                            <ul>
                                <li><a>Sipher token</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                roadmap
                            </div>
                            <ul>
                                <li><a>Phase 1</a></li>
                                <li><a>Phase 2</a></li>
                                <li><a>Phase n</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                our team & partners
                            </div>
                            <ul>
                                <li><a>Sipher team & partners</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className="encyclopedia-node">
                                community channels
                            </div>
                            <ul>
                                <li><a>Sipher community</a></li>
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
