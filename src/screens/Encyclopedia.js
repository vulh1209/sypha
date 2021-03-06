import React from "react";

import MiniCard from "../cpns/MiniCard";
import Menu2 from "../cpns/Menu2";
import Card3 from "../cpns/Card3";
import ClanCard from "../cpns/ClanCard";
import "../css/Encyclopedia.css";
import Sypha1 from "../imgs/Sypha1.svg";
import Sypha2 from "../imgs/Sypha2.svg";
import CharacterClass from "../cpns/CharacterClass";
import Card from "../cpns/Card";

export default function Encyclopedia() {
  return (
    <div id="Encyclopedia">
      <Menu2 />
      <div id="Encyclopedia-body">
        <div id="Encyclopedia-body-left">
          <ul>
            <li>
              <div className="encyclopedia-node">About Sipher</div>
              <ul>
                <li>
                  <a>Abstract</a>
                </li>
                <li>
                  <a>Vision & Mission</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="encyclopedia-node">The playground</div>
              <ul>
                <li>
                  <a>Main Story</a>
                </li>
                <li>
                  <a>Doge Agents</a>
                </li>
                <li>
                  <a>Mechanics</a>
                </li>
                <li>
                  <a>Items</a>
                </li>
                <li>
                  <a>Events</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="encyclopedia-node">technology</div>
              <ul>
                <li>
                  <a>NFTs</a>
                </li>
                <li>
                  <a>AI</a>
                </li>
                <li>
                  <a>GAN</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="encyclopedia-node">Tokennomic</div>
              <ul>
                <li>
                  <a>Sipher token</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="encyclopedia-node">roadmap</div>
              <ul>
                <li>
                  <a>Phase 1</a>
                </li>
                <li>
                  <a>Phase 2</a>
                </li>
                <li>
                  <a>Phase n</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="encyclopedia-node">our team & partners</div>
              <ul>
                <li>
                  <a>Sipher team & partners</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="encyclopedia-node">community channels</div>
              <ul>
                <li>
                  <a>Sipher community</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="Encyclopedia-body-right">
          <h1>sipher</h1>
          <h2>Abstract</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. ` adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </div>
          <h2>Sipher???s Missions & Visions</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet. Lorem dolore magna
            aliqua. Consectetur adipiscing elit dolore. Ceiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
          <h1>SIPHER PLAYGROUND</h1>
          <h2>The Main Story - ASC??NSION</h2>
          <div>
            <div id="left?">
              <div>
                <h3>People, people never change </h3>
                <div>
                  For decades. The Romans waged war to gather slaves and wealth.
                  For centuries, China internal strife lasted for thousands of
                  years. Spain??built an empire from its lust for gold and
                  territory. Hitler??shaped a battered??Germany into an economic
                  superpower. America used their might of military warfare to
                  reign supreme over the global political and economical climate
                  People never change. In this century, people still wage war
                  over the resources that could be acquired. Only this time, the
                  spoils of war were also its weapons: Energy and Water. Facing
                  ever imminent threat of extinction from over harvesting earth
                  resources and pollution, through decades of research, the
                  brightest minds of humankind have negate their political
                  differences, forgave the sins of the past, and have joined
                  forces to develop the salvation for human-kind. A new form of
                  meta-existence, codename Agents were born. It is the
                  combination animal CRISPR-genome editing, ethereal elements
                  which are the combination of ethers and the mysterious
                  potential of cryptonic atoms.
                </div>
              </div>
              <div>
                <div>
                  <img />
                  <div>
                    <h3>The Alphadoges</h3>
                    <p>Code name: Alpha 001</p>
                    <p>Code name: Alpha 002</p>
                  </div>
                </div>
                <div>
                  <img />
                  <div>
                    <h3>The Alphadoges</h3>
                    <p>Code name: Alpha 001</p>
                    <p>Code name: Alpha 002</p>
                  </div>
                </div>
              </div>
              <div>
                <h3>Beacon World 1 | Steam & Sparks</h3>
                <div>
                  Mankind seeking the answers that could be, decided to recreate
                  the man-made digital civilization. Taking place in the eras
                  which steam-power-engines were invented along side with the
                  very first sparks of electricity. Steam-powered electricity
                  generation, from powering Satoshi crystals to Ethereum quantum
                  mainframe computing. These engines have proven since the old
                  ages that they are the foundation of human innovation. Satoshi
                  crystals once processed, become the ultimate condensed energy
                  sources that can with hold gigawatts of energy. They exist in
                  all the devices of these strange worlds that our Agents will
                  discover and explore. In this world, Large Organizations
                  replace governments and rule the world through various forms,
                  decentralized and centralized organizations. Here exists an
                  tantalizing struggle that our Agents will have to embrace,
                  submit or rebel. The choice is yours In this world, human
                  potential is only limited by the Host and their Agent's
                  imagination. This world, shall mark humanity???s first{" "}
                  <span>ASC??NSION</span>
                </div>
              </div>
            </div>
            <div id="right?">
              <img />
              <div>
                The first <span>10,000 Agents</span> prototypes, a synthetically
                programmed nano-seed is planted into the <span>Animals</span>{" "}
                genes which grow into an organism that feeds upon the minerals
                in the soil and rock of the stars, the atmospheric elements of
                the cryptoverse. Although the seeds are exact copies of each
                other, the conditions vary with every location, timing and the
                crytonic-elements thus creating a new and unique version of
                Agent each time. These first generation Agents retain their
                loyal and human-loving traits of canines, yet are imbued with
                powers and technological advancement in genome-editing, allowing
                them be psychologically tethered and represent their human hosts
                in the metaverse. Technological advancement in energy generation
                as well as the rapid nano elements of the cryptoverse give
                unnatural powers to these beings, grant them the ability to
                surpass their natural physical limitations, enabling human live
                movements and human speech ability, and most importantly the
                ability to withstand the shear forces of quantum teleportation,
                allowing them to slip between the meta-physical, the digital and
                the virtual realm. Aiming to be their Host's future physical
                cyborg companions in the eventual future, these Agents serves as
                the vessels in which their host conduct their journey via
                Portals scattered around the human realm, via their phones,
                computers, VR and AR headsets. These Agents are now, able to
                explore worlds that their human hosts could only dream ofased
                later
              </div>

              <img src="" alt="" />
            </div>
          </div>
          <h2>The Doge Agents</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
          <div>
            <Card3 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
            <Card3 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card3 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
            <Card3 id="#9090" name="Origin Sypha" price="0.01" src={Sypha2} />
            <Card3 id="#9090" name="Origin Sypha" price="0.01" src={Sypha1} />
          </div>
          <h3>Clans</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
          <div>
            <ClanCard
              name="Clan name"
              price="123.198 Doge"
              src={Sypha1}
              description="Clan slogan clan slogan clan slogan"
            />
            <ClanCard
              name="Clan name"
              price="123.198 Doge"
              src={Sypha1}
              description="Clan slogan clan slogan clan slogan"
            />
            <ClanCard
              name="Clan name"
              price="123.198 Doge"
              src={Sypha1}
              description="Clan slogan clan slogan clan slogan"
            />
            <ClanCard
              name="Clan name"
              price="123.198 Doge"
              src={Sypha1}
              description="Clan slogan clan slogan clan slogan"
            />
            <ClanCard
              name="Clan name"
              price="123.198 Doge"
              src={Sypha1}
              description="Clan slogan clan slogan clan slogan"
            />
          </div>
          <h3>character Class</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
          <div>
            <CharacterClass
              class_src={Sypha1}
              class_title="Fighter"
              class_intro="Such melee, many bonk"
              class_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              prop1="10 INT"
              prop2="20 DEX"
              prop3="100 MP"
            />
            <CharacterClass
              class_src={Sypha1}
              class_title="Fighter"
              class_intro="Such melee, many bonk"
              class_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              prop1="10 INT"
              prop2="20 DEX"
              prop3="100 MP"
            />
            <CharacterClass
              class_src={Sypha1}
              class_title="Fighter"
              class_intro="Such melee, many bonk"
              class_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              prop1="10 INT"
              prop2="20 DEX"
              prop3="100 MP"
            />
            <CharacterClass
              class_src={Sypha1}
              class_title="Fighter"
              class_intro="Such melee, many bonk"
              class_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              prop1="10 INT"
              prop2="20 DEX"
              prop3="100 MP"
            />
          </div>
          <h2>Gameplay</h2>
          <h3>Many play. Such fascinate!</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            <div>
              <Card />
              <Card />
            </div>
            <div>
              <Card />
              <Card />
            </div>
          </div>
          <h1>SIPHER TECHNOLOGIES</h1>
          <h2>Overview Phase 1</h2>
          <div>
            We use GANs Model to create 10,000 characters (SIPHERIAN) of the
            world SIPH??RIA, these characters are unique and implemented on NFTs
            technolog. the power of AI the characters can chat with you, play
            games and assistant about crypto
          </div>
          <img src="" alt="" />
          <h2>Sipher NFTs</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <h3>Wallet supported</h3>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <h2>GAN Algorithm to create unitque NFT doge agent</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <img src="" alt="" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <ul>
            <li>100% provable.</li>
            <li>Totaly random</li>
            <li>Fair Distribution</li>
            <li>Absolutely unique</li>
          </ul>
          <h2>Hekate AI Engine to make your NFTs ALIVE</h2>
          <div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <img src="" alt="" />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit. Ask for a joke (mostly related to
              crytoworld): Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ask for a fortune-telling: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. In doge culture, we believe in
              fortune teller as much as we trust our wildest dream. Ask for a
              mini game: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Currently, we have lauched X mini games, click here for
              more info. Ask for hot deals: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Click here for Marketplace. Ask for
              investment advices (just for crytoworld): Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Setup price alert
              bois: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
